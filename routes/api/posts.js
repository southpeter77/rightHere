const express = require('express');
const asyncHandler = require('express-async-handler');
const db = require('../../db/models');
const {User,Post, Place, Photo, Relationship, Comment} = require('../../db/models');
const router = express.Router();


router.get('/', asyncHandler(async (req, res, next) => {

    const users = await db.Post.findAll({
        // include:[Place, Photo, User]
        include:{
            model:User,
            attributes:["id", "biography","firstName", "lastName","email"]
        },
        include:[Place, Photo]
    });
    const userData = users.map(each=>{
        return {
            id: each.id
        }
    })

    res.json(users)
}));


module.exports = router;
