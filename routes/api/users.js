const express = require('express');
const asyncHandler = require('express-async-handler');
const { handleValidationErrors, validateSignUpUser, validateUserEmailAndPassword } = require('../utils/utils');
const db = require('../../db/models');
const router = express.Router();
const {getUserToken} = require("../utils/auth");
const bcrypt = require("bcryptjs");



router.get('/', asyncHandler(async (req, res, next) => {

    const users = await db.User.findAll();
    // // res.json({ users });
    // console.log("asdf")
    // console.log("hiiiiiiii")
    // console.log(users)
    res.json({ mesage: "hi" })
}));


///////////////log-in api////////
router.post("/login", validateUserEmailAndPassword, handleValidationErrors, asyncHandler(async (req, res, next) => {
    const email = req.body.email;
    const password = req.body.password;
    const user = await db.User.findOne({
        where: { email: email }
    });

    if (user === null) {

        const err = new Error("Login failed");
        err.status = 401;
        err.title = "Login failed";
        err.errors = ["The provided credentials were invalid."];

        return next(err);
    }
    const passwordsMatch = await bcrypt.compareSync(password, user.hashed_password.toString())
    if (!passwordsMatch) {
        const err = new Error("Login failed");
        err.status = 401;
        err.title = "Login failed";
        err.errors = ["The provided credentials were invalid."];

        return next(err);
    }

    const token = getUserToken(user);
    res.json({
      token, userId:user.id
    })
}))
////////////sign up/////////////////////////
router.post("/signup", validateSignUpUser, handleValidationErrors, asyncHandler(async(req,res,next) => {
    const {firstName, lastName, email, biography, password} = req.body
    const hashed_password = await bcrypt.hash(password, 10);
    const newUser = await db.User.create({firstName, lastName, email, biography, hashed_password})
    const token = getUserToken(newUser);

    res.json({
        token, userId:newUser.id
      })

}))

module.exports = router;
