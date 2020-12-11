const express = require('express');
const asyncHandler = require('express-async-handler');
const { handleValidationErrors, validateSignUpUser, validateUserEmailAndPassword } = require('../utils/utils');
const db = require('../../db/models');
const { User, Post, Place, Photo, Relationship, Comment } = require('../../db/models');
const router = express.Router();

//delete comment by comment id
router.delete("/delete", asyncHandler(async(req, res, next) => {
    const commentId = req.body.commentId;
    const postId = req.body.postId
    const comment = await db.Comment.findByPk(commentId)
    await comment.destroy();
    const comments = await db.Comment.findAll({
        where:{
            post_id:postId
        },
        include:{model:User,attributes:["id", "biography","firstName", "lastName","email"], include:{model:Photo}}
    })
    res.json(comments)
}))

//grab all comment by post id
router.put("/post", asyncHandler(async(req,res,next) => {
    const postId = req.body.postId
    const comments = await db.Comment.findAll({
        where:{
            post_id:postId
        },
        include:{model:User,attributes:["id", "biography","firstName", "lastName","email"], include:{model:Photo}}
    })
    res.json(comments)
}))
//create post
router.post("/create", asyncHandler(async(req,res,next) => {
    const comment = await db.Comment.create({
        user_id: req.body.userId,
        post_id: req.body.postId,
        description: req.body.comment
    })
    const comments = await db.Comment.findAll({
        where:{
            post_id:req.body.postId
        },
        include:{model:User,attributes:["id", "biography","firstName", "lastName","email"], include:{model:Photo}}
    })
    res.json(comments)
}))

module.exports = router;
