const merge = require('lodash.merge');
const express = require('express');
const asyncHandler = require('express-async-handler');
const db = require('../../db/models');
const {User,Post, Place, Photo, Relationship, Comment, Like} = require('../../db/models');
const router = express.Router();

router.put("/", asyncHandler(async (req,res,next) => {
const postId = req.body.postId;
const userId =req.body.userId;
console.log(typeof(postId))
const existedLike =await db.Like.findOne({
    where: {
        user_id:userId,
        post_id:postId
    }
})
if(existedLike) {
    await existedLike.destroy();
    res.json({message:"deleted"})
} else {
     await db.Like.create({
            user_id:userId,
            post_id:postId

    })
    res.json({message:"created"})

}
}))
/////////////////////////////////
router.get("/post/:id(\\d+)", asyncHandler(async(req,res,next) => {
    const postId = Number(req.params.id);
    const allLikes = await db.Like.findAll({
        where:{
            post_id:postId
        }
    })
    console.log(allLikes)
}))
//////////////////////////////
router.get("/all" , asyncHandler(async(req,res,next) => {
    const allLikes = await db.Like.findAll();
    res.json(allLikes)
}))





module.exports = router;
