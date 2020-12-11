const merge = require('lodash.merge');
const express = require('express');
const asyncHandler = require('express-async-handler');
const db = require('../../db/models');
const {User,Post, Place, Photo, Relationship, Comment} = require('../../db/models');
const router = express.Router();
const AWS = require("aws-sdk");
const { awsKeys } = require("../../config")
const multer = require("multer");
const upload = multer();



//////upload image by place id////////////

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

router.put("/upload", 
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
    const image = await Photo.create({
        place_id:req.body.place_id,
        url
    })

    const data = await db.Post.findAll({
        where:{
            place_id:req.body.place_id
        },
        include:[
            {model:Photo},
            {model:User, attributes:["id", "biography","firstName", "lastName","email"], include:{model:Photo}}

        ]
    })
    res.json(data)



    res.json({message:"ok"})
}))






module.exports = router;
