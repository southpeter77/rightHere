const express = require('express');
const asyncHandler = require('express-async-handler');
const { handleValidationErrors, validateSignUpUser, validateUserEmailAndPassword } = require('../utils/utils');
const db = require('../../db/models');
const { User, Post, Place, Photo, Relationship, Comment } = require('../../db/models');
const router = express.Router();


///grab user with users profile picture //

router.get("/users", asyncHandler(async(req,res,next) => {
    const users = await db.User.findAll({
        attributes:['id','firstName', 'lastName'],
        include:[{model:Photo, attributes:["url"]}]
    })
    const places = await db.Place.findAll({
        attributes:["id", "name"],
        include:[{model:Photo, attributes:["url"]}]
    })

    places.forEach(each=>users.push(each))
    res.json(users)
}))










module.exports = router;
