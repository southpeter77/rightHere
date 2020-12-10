const express = require('express');
const asyncHandler = require('express-async-handler');
const { handleValidationErrors, validateSignUpUser, validateUserEmailAndPassword } = require('../utils/utils');
const db = require('../../db/models');
const { User, Post, Place, Photo, Relationship, Comment } = require('../../db/models');
const router = express.Router();

router.get("/post/:id(\\d+)", asyncHandler(async(req,res,next) => {
    const postId = Number(req.params.id)
    console.log(postId)
}))

router.post("/create", asyncHandler(async(req,res,next) => {
    const comment = await db.Comment.create({
        user_id: req.body.userId,
        post_id: req.body.postId,
        description: req.body.comment
    })
    const allComments = await db.Comment.findAll({
        where:{post_id:req.body.postId},
        include:[{model:User, attributes:["id", "biography","firstName", "lastName","email"], include:{model:Photo}}],
    })
    res.json(allComments)
}))

module.exports = router;
