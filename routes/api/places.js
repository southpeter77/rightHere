const express = require('express');
const asyncHandler = require('express-async-handler');
const db = require('../../db/models');
const { User, Post, Place, Photo, Relationship, Comment } = require('../../db/models');
const router = express.Router();
const {requireAuth} = require("../utils/auth");

//check if the place exist 
router.put("/check", asyncHandler(async (req, res, next) => {
    const coordinates = req.body
    let lat = coordinates.lat
    let lng = coordinates.lng
    //  lat = 41.505493
    //  lng = -81.681290
    const allPlaces = await Place.findAll()
    const filteredPlaces = allPlaces.filter(each=>{
        if (JSON.parse(each.coordinates).lat+0.0035 >= lat
            && JSON.parse(each.coordinates).lat-0.0035 <= lat
            && JSON.parse(each.coordinates).lng+0.0035 >= lng
            && JSON.parse(each.coordinates).lng-0.0035 <= lng
        ){
            return each
        }

    })
    if(filteredPlaces.length ===0){
        res.json({message:false})
    } else {
        res.json({message:true})

    }
}))
//grab place's data with current location.
router.put("/current", asyncHandler(async (req, res, next) => {
    const coordinates = req.body
    let lat = coordinates.lat
    let lng = coordinates.lng
    //  lat = 41.505493
    //  lng = -81.681290
    const allPlaces = await Place.findAll()
    const filteredPlaces = allPlaces.filter(each=>{
        if (JSON.parse(each.coordinates).lat+0.0035 >= lat
            && JSON.parse(each.coordinates).lat-0.0035 <= lat
            && JSON.parse(each.coordinates).lng+0.0035 >= lng
            && JSON.parse(each.coordinates).lng-0.0035 <= lng
        ){
            return each
        }

    })
    if(filteredPlaces.length ===0){
        res.json(filteredPlaces)
    } else {
        res.json(filteredPlaces)

    }
}))



//grab by id
router.get('/:id(\\d+)', asyncHandler(async (req, res, next) => {

    const placeId = Number(req.params.id)
    const data = await db.Place.findOne({
        where: {
            id: placeId
        },
        include: [
            { model: Photo },
            {
                model: Post, include: [{ model: Photo },
                {
                    model: User,
                    attributes: ["id", "biography", "firstName", "lastName", "email"],
                    include: { model: Photo }
                }]
            },
            { model: User, attributes: ["id", "biography", "firstName", "lastName", "email"], include: { model: Photo } }
        ]
    })

    res.json(data)
}));




router.post("/create", requireAuth, asyncHandler(async(req,res,next) => {

}))




module.exports = router;
