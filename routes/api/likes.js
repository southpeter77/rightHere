const merge = require('lodash.merge');
const express = require('express');
const asyncHandler = require('express-async-handler');
const db = require('../../db/models');
const {User,Post, Place, Photo, Relationship, Comment, Like} = require('../../db/models');
const router = express.Router();
//////////////////like for all posts/////////////////////
router.put("/", asyncHandler(async (req,res,next) => {
const postId = req.body.postId;
const userId =req.body.userId;
const existedLike =await db.Like.findOne({
    where: {
        user_id:userId,
        post_id:postId
    }
})
if(existedLike) {
    await existedLike.destroy();
    const data = await db.Post.findAll({
        include:[
            {model:Place},
            {model:Photo},
            {model:User, attributes:["id", "biography","firstName", "lastName","email"], include:{model:Photo}},
            {model:Comment, include:{model:User,attributes:["id","firstName", "lastName" ], include:{model:Photo}}},
            {model:Like}
        ]
    })

    res.json(data)
} else {
     await db.Like.create({
            user_id:userId,
            post_id:postId

    })
    const data = await db.Post.findAll({
        include:[
            {model:Place},
            {model:Photo},
            {model:User, attributes:["id", "biography","firstName", "lastName","email"], include:{model:Photo}},
            {model:Comment, include:{model:User,attributes:["id","firstName", "lastName" ], include:{model:Photo}}},
            {model:Like}
        ]
    })

    res.json(data)

}
}))
//////////like for posts in places//////////////////
router.put("/place", asyncHandler(async (req,res,next) => {
    const postId = req.body.postId;
    const userId =req.body.userId;
    const placeId = req.body.placeId
    const existedLike =await db.Like.findOne({
        where: {
            user_id:userId,
            post_id:postId
        }
    })
    if(existedLike) {
        await existedLike.destroy();
        const data = await db.Post.findAll({
            where:{
                place_id:placeId
            },
            include:[
                {model:Photo},
                {model:User, attributes:["id", "biography","firstName", "lastName","email"], include:{model:Photo}},
                {model:Comment, include:{model:User,attributes:["id","firstName", "lastName" ], include:{model:Photo}}},
                {model:Like}
            ]
        })
        res.json(data)
    } else {
         await db.Like.create({
                user_id:userId,
                post_id:postId
    
        })
        const data = await db.Post.findAll({
            where:{
                place_id:placeId
            },
            include:[
                {model:Photo},
                {model:User, attributes:["id", "biography","firstName", "lastName","email"], include:{model:Photo}},
                {model:Comment, include:{model:User,attributes:["id","firstName", "lastName" ], include:{model:Photo}}},
                {model:Like}
            ]
        })
        res.json(data)
    
    }
    }))

//////////like for posts in profile//////////////////
router.put("/profile", asyncHandler(async (req,res,next) => {
    const postId = req.body.postId;
    const userId =req.body.userId;
    const existedLike =await db.Like.findOne({
        where: {
            user_id:userId,
            post_id:postId
        }
    })
    if(existedLike) {
        await existedLike.destroy();
        const data = await db.Post.findAll({
            where:{
                user_id:userId
            },
            include:[
                {model:Photo}, {model:Place, attributes:["id","name"]},
                {model:Comment, include:{model:User,attributes:["id","firstName", "lastName" ], include:{model:Photo}}},
                {model:Like}
            ]
        })
        res.json(data)
    } else {
         await db.Like.create({
                user_id:userId,
                post_id:postId
    
        })
        const data = await db.Post.findAll({
            where:{
                user_id:userId
            },
            include:[
                {model:Photo}, {model:Place, attributes:["id","name"]},
                {model:Comment, include:{model:User,attributes:["id","firstName", "lastName" ], include:{model:Photo}}},
                {model:Like}
            ]
        })
        res.json(data)
    
    }
    }))

    



///////////////like example practice//////////////////
router.get("/post/:id(\\d+)", asyncHandler(async(req,res,next) => {
    const postId = Number(req.params.id);
    const allLikes = await db.Like.findAll({
        where:{
            post_id:postId
        }
    })
    // console.log(allLikes)
}))
//////////////////////////////
router.get("/all" , asyncHandler(async(req,res,next) => {
    const allLikes = await db.Like.findAll();
    res.json(allLikes)
}))



//////////like for posts in other user's  profile//////////////////
router.put("/otherprofile", asyncHandler(async (req,res,next) => {

    const postId = req.body.postId;
    const userId =req.body.currentUserId;
    const postOwnerId = req.body.thisPostOwnerId
    const existedLike =await db.Like.findOne({
        where: {
            user_id:userId,
            post_id:postId
        }
    })
   
    if(existedLike) {
        await existedLike.destroy();



        const user = await db.User.findOne({
            where:{
                id:postOwnerId
            },
            attributes:["id","email", "firstName", "lastName", "biography"],
            include:[
                {model:Post, include:[Photo, Like, Comment, Place]},
                {model:Place, include:{model:Photo}},
                {model:Photo}
            ]
    
        })
        res.json(user)

    } else {
         await db.Like.create({
                user_id:userId,
                post_id:postId
    
        })

        const user = await db.User.findOne({
            where:{
                id:postOwnerId
            },
            attributes:["id","email", "firstName", "lastName", "biography"],
            include:[
                {model:Post, include:[Photo, Like, Comment, Place]},
                {model:Place, include:{model:Photo}},
                {model:Photo}
            ]
    
        })
        res.json(user)
    
    }
    }))





module.exports = router;
