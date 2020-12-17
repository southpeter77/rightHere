const merge = require('lodash.merge');
const express = require('express');
const asyncHandler = require('express-async-handler');
const db = require('../../db/models');
const {User,Post, Place, Photo, Relationship, Comment, Like} = require('../../db/models');
const router = express.Router();

//add friend...pending = true, friend = false //
router.put("/add", asyncHandler(async(req,res,next) => {
    const relationship = await db.Relationship.create({
        from_user_id:req.body.currentUserId,
        to_user_id: req.body.otherUserId,
        friend:false,
        pending:true
    })
    const user = await db.User.findOne({
        where:{
            id:req.body.otherUserId
        },
        attributes:["id","email", "firstName", "lastName", "biography"],
        include:[
            {model:Post, include:[Photo, Like, Comment, Place]},
            {model:Place, include:{model:Photo}},
            {model:Photo},
            {model:Relationship}
        ]

    })
    // console.log(user)
    res.json(user)
}))






module.exports = router;
