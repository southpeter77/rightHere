const express = require('express');
const asyncHandler = require('express-async-handler');
const db = require('../../db/models');
const { User, Post, Place, Photo, Relationship, Comment } = require('../../db/models');
const router = express.Router();
const {requireAuth} = require("../utils/auth");
const AWS = require("aws-sdk");
const { awsKeys } = require("../../config")
const multer = require("multer");
const upload = multer();

//check if the place exist 
router.put("/check", asyncHandler(async (req, res, next) => {
    const coordinates = req.body
    let lat = coordinates.lat
    let lng = coordinates.lng
    //  lat = 41.505493
    //  lng = -81.681290
    const allPlaces = await Place.findAll()
    const filteredPlaces = allPlaces.filter(each=>{
        if (JSON.parse(each.coordinates).lat+0.0035 >= lat
            && JSON.parse(each.coordinates).lat-0.0035 <= lat
            && JSON.parse(each.coordinates).lng+0.0035 >= lng
            && JSON.parse(each.coordinates).lng-0.0035 <= lng
        ){
            return each
        }

    })
    if(filteredPlaces.length ===0){
        res.json({message:false})
    } else {
        res.json({message:true})

    }
}))
//grab place's data with current location.
router.put("/current", asyncHandler(async (req, res, next) => {
    const coordinates = req.body
    let lat = coordinates.lat
    let lng = coordinates.lng
    //  lat = 41.505493
    //  lng = -81.681290
    const allPlaces = await Place.findAll()
    const filteredPlaces = allPlaces.filter(each=>{
        if (JSON.parse(each.coordinates).lat+0.0035 >= lat
            && JSON.parse(each.coordinates).lat-0.0035 <= lat
            && JSON.parse(each.coordinates).lng+0.0035 >= lng
            && JSON.parse(each.coordinates).lng-0.0035 <= lng
        ){
            return each
        }

    })
    if(filteredPlaces.length ===0){
        res.json(filteredPlaces)
    } else {
        res.json(filteredPlaces)

    }
}))



//grab by id
router.get('/:id(\\d+)', asyncHandler(async (req, res, next) => {

    const placeId = Number(req.params.id)
    const data = await db.Place.findOne({
        where: {
            id: placeId
        },
        include: [
            { model: Photo },
            {
                model: Post, include: [{ model: Photo },
                {
                    model: User,
                    attributes: ["id", "biography", "firstName", "lastName", "email"],
                    include: { model: Photo }
                }]
            },
            { model: User, attributes: ["id", "biography", "firstName", "lastName", "email"], include: { model: Photo } }
        ]
    })

    res.json(data)
}));

////////////////create place with uploaded picture///////////////
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

router.post("/create", 
upload.any(),
fileFilter, 
asyncHandler(async(req,res,next) => {
    const file = req.files[0];

    const params = {
        Bucket: "athlete101image",
        Key: Date.now().toString() + file.originalname, // UNIQUELY IDENTIFIES AN OBJECT IN THE BUCKET
        Body: file.buffer,
        ACL: "public-read",
        ContentType: file.mimetype,
      };
    // const promise = s3.upload(params).promise(); // CREATE A PROMISE FROM THE UPLOAD
    // const uploadedImage = await promise;  
    console.log("here")
    console.log(file)
}))




module.exports = router;
