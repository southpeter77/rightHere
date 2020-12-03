const express = require('express');
const asyncHandler = require('express-async-handler');

const db = require('../../db/models');

const router = express.Router();

router.get('/', asyncHandler(async (req, res, next)=>{

    const users = await db.User.findAll();
    // // res.json({ users });
    // console.log("asdf")
    console.log("hiiiiiiii")
    console.log(users)
    res.json({mesage:"hi"})
}));

module.exports = router;
