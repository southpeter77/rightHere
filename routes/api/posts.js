const merge = require('lodash.merge');
const express = require('express');
const asyncHandler = require('express-async-handler');
const db = require('../../db/models');
const {User,Post, Place, Photo, Relationship, Comment} = require('../../db/models');
const router = express.Router();

//grab all post//
router.get('/', asyncHandler(async (req, res, next) => {
    const data = await db.Post.findAll({
        include:[
            {model:Place},
            {model:Photo},
            {model:User, attributes:["id", "biography","firstName", "lastName","email"], include:{model:Photo}}
        ]
    })

    res.json(data)
}));
//grab all posts by place id//

router.get('/place/:id(\\d+)', asyncHandler(async (req, res, next) => {
    const placeId = Number(req.params.id)

    const data = await db.Post.findAll({
        where:{
            place_id:placeId
        },
        include:[
            {model:Photo},
            {model:User, attributes:["id", "biography","firstName", "lastName","email"], include:{model:Photo}}

        ]
    })
    res.json(data)
}))

module.exports = router;
