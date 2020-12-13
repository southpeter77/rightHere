const express = require('express');
const asyncHandler = require('express-async-handler');
const { handleValidationErrors, validateSignUpUser, validateUserEmailAndPassword } = require('../utils/utils');
const db = require('../../db/models');
const { Post, Place, Photo, Relationship, Comment } = require('../../db/models');
const router = express.Router();
const { getUserToken } = require("../utils/auth");
const bcrypt = require("bcryptjs");
const AWS = require("aws-sdk");
const { awsKeys } = require("../../config")
const multer = require("multer");
const upload = multer();


router.get('/', asyncHandler(async (req, res, next) => {

    const users = await db.User.findAll();
    // // res.json({ users });
    // console.log("asdf")
    // console.log("hiiiiiiii")
    // console.log(users)
    res.json({ mesage: "hi" })
}));


///////////////log-in api////////
router.post("/login", validateUserEmailAndPassword, handleValidationErrors, asyncHandler(async (req, res, next) => {
    const email = req.body.email;
    const password = req.body.password;
    const user = await db.User.findOne({
        where: { email: email },
        include: [Post, Place, Photo]
    });

    if (user === null) {

        const err = new Error("Login failed");
        err.status = 401;
        err.title = "Login failed";
        err.errors = ["The provided credentials were invalid."];

        return next(err);
    }
    const passwordsMatch = await bcrypt.compareSync(password, user.hashed_password.toString())
    if (!passwordsMatch) {
        const err = new Error("Login failed");
        err.status = 401;
        err.title = "Login failed";
        err.errors = ["The provided credentials were invalid."];

        return next(err);
    }

    const token = getUserToken(user);
    res.json({
        token,
        userId: user.id,
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
        biography: user.biography,
        posts: user.Posts,
        places: user.Places,
        photos: user.Photos
    })
}))
////////////sign up/////////////////////////
router.post("/signup", validateSignUpUser, handleValidationErrors, asyncHandler(async (req, res, next) => {
    const { firstName, lastName, email, biography, password } = req.body
    const hashed_password = await bcrypt.hash(password, 10);
    const newUser = await db.User.create({ firstName, lastName, email, biography, hashed_password })
    const user = await db.User.findOne({
        where: { id: newUser.id },
        include: [Post, Place, Photo]
    });

    const token = getUserToken(user);
    res.json({
        token,
        userId: user.id,
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
        biography: user.biography,
        posts: user.Posts,
        places: user.Places,
        photos: user.Photos
    })

}))

///edit biography//
router.put("/biography/edit", asyncHandler(async (req, res, next) => {
    const userId = req.body.userId
    const user = await db.User.findByPk(userId)
    await user.update({
        biography: req.body.biography
    })
    const updatedUser = await db.User.findOne({
        where: { id: user.id },
        include: [Post, Place, Photo]
    });

    const token = getUserToken(user);
    res.json({
        token,
        userId: updatedUser.id,
        email: updatedUser.email,
        firstName: updatedUser.firstName,
        lastName: updatedUser.lastName,
        biography: updatedUser.biography,
        posts: updatedUser.Posts,
        places: updatedUser.Places,
        photos: updatedUser.Photos
    })

}))
//////edit profile picture ///////////
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
router.put("/profilephoto/edit",
    upload.any(),
    fileFilter,
    asyncHandler(async (req, res, next) => {
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
        const userId = Number(req.body.user_id)
        const oldPhoto = await db.Photo.findOne({
            where:{
                user_id:userId
            }
        })
        if(oldPhoto) {
            await oldPhoto.destroy()
        }
        
        const newPhoto = await db.Photo.create({
            user_id:userId,
            url
        })
        const updatedUser = await db.User.findOne({
            where: { id: userId },
            include: [Post, Place, Photo]
        });
    
        const token = getUserToken(updatedUser);
        res.json({
            token,
            userId: updatedUser.id,
            email: updatedUser.email,
            firstName: updatedUser.firstName,
            lastName: updatedUser.lastName,
            biography: updatedUser.biography,
            posts: updatedUser.Posts,
            places: updatedUser.Places,
            photos: updatedUser.Photos
        })
  

  }))


module.exports = router;
