const express = require('express');
const asyncHandler = require('express-async-handler');
const db = require('../../db/models');
const {User,Post, Place, Photo, Relationship, Comment} = require('../../db/models');
const router = express.Router();


router.get('/:id(\\d+)', asyncHandler(async (req, res, next) => {
  
    const placeId = Number(req.params.id)
    const data = await db.Place.findOne({
        where:{
            id: placeId
        },
        include:[
            {model:Photo},
            {model:Post},
            {model:User, attributes:["id", "biography","firstName", "lastName","email"], include:{model:Photo}}
        ]
    })

    res.json(data)
}));


module.exports = router;
