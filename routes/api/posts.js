const merge = require('lodash.merge');
const express = require('express');
const asyncHandler = require('express-async-handler');
const db = require('../../db/models');
const {User,Post, Place, Photo, Relationship, Comment, Like} = require('../../db/models');
const router = express.Router();
const AWS = require("aws-sdk");
const { awsKeys } = require("../../config")
const multer = require("multer");
const upload = multer();

//grab all post//
router.get('/', asyncHandler(async (req, res, next) => {
    const data = await db.Post.findAll({
        include:[
            {model:Place},
            {model:Photo},
            {model:User, attributes:["id", "biography","firstName", "lastName","email"], include:{model:Photo}},
            {model:Comment, include:{model:User,attributes:["id","firstName", "lastName" ], include:{model:Photo}}},
            // {model:Like}
        ]
    })

    res.json(data)
}));
//grab all posts by place id//

router.get('/place/:id(\\d+)', asyncHandler(async (req, res, next) => {
    const placeId = Number(req.params.id)

    const data = await db.Post.findAll({
        where:{
            place_id:placeId
        },
        include:[
            {model:Photo},
            {model:User, attributes:["id", "biography","firstName", "lastName","email"], include:{model:Photo}}

        ]
    })
    res.json(data)
}))

////grab all post by user id ///
router.get('/user/:id(\\d+)', asyncHandler(async (req, res, next) => {
    const userId = Number(req.params.id)

    const data = await db.Post.findAll({
        where:{
            user_id:userId
        },
        include:[
            {model:Photo}, {model:Place, attributes:["id","name"]}
        ]
    })
    res.json(data)
}))




//create post//
AWS.config.update({
    secretAccessKey: awsKeys.secretAccessKey,
    accessKeyId: awsKeys.accessKeyId,
    region: awsKeys.region,
  });

const s3 = new AWS.S3(); 
const fileFilter = (req, res, next) => {
    const file = req.files[0];
    if (file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
      next();
    } else {
      next({ status: 422, errors: ["Invalid Mime Type, only JPEG and PNG"] });
    }
  };

router.put("/create", 
upload.any(),
fileFilter, 
asyncHandler(async(req,res,next) => {
    const file = req.files[0];

    const params = {
        Bucket: "right-here-app",
        Key: Date.now().toString() + file.originalname,
        Body: file.buffer,
        ACL: "public-read",
        ContentType: file.mimetype,
      };
    const promise = s3.upload(params).promise(); 
    const uploadedImage = await promise;  
    const url = uploadedImage.Location
    const post = await Post.create({
        name:req.body.name, 
        coordinates:req.body.currentCoordinates,
        description:req.body.description, 
        user_id:req.body.user_id, 
        place_id: req.body.place_id
    })
    const image = await Photo.create({
        post_id:post.id,
        url
    })

    res.json({post, image})
}))



module.exports = router;
