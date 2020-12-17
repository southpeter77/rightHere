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
            {model:Relationship, as:"to"}
        ]

    })
    // console.log(user)
    res.json(user)
}))


router.get("/:id(\\d+)", asyncHandler(async(req,res,next) => {
    const userId = Number.parseInt(req.params.id);
    // console.log(userId)
    const relationships = await db.Relationship.findAll({
        where:{
            from_user_id: userId
        },
        include:[
            {model:User, as: "to", attributes:["id","firstName", "lastName", "email"],
        include:{model:Photo}}
        ]
    })
    const relationships2 = await db.Relationship.findAll({
        where:{
            to_user_id:userId
        },
        include:[
            {model:User , as:"from", attributes:["id","firstName", "lastName", "email"],
        include:{model:Photo}}
        ]
    })
    // console.log(relationships)
    // console.log(relationships2)
    if (relationships.length == 0 && relationships2.length == 0) {
        res.json([])
    } else if (relationships.length == 0 && relationships2.length > 0){
        relationships2.forEach(each=>relationships.push(each))
        res.json(relationships)
    } else if (relationships.length> 0 && relationships2.length == 0){
        relationships.forEach(each=>relationships2.push(each))
    res.json(relationships)
    } else {
       res.json([...relationships, ...relationships2])
    }


}))


//////////accept friend request///////////
router.put("/accept", asyncHandler(async(req,res,next) => {
    console.log(req.body)
}))


module.exports = router;
