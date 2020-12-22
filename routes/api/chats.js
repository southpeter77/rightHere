const express = require('express');
const asyncHandler = require('express-async-handler');
const { Room, Message } = require('../../db/models');

const router = express.Router();

router.get('/:id(\\d+)', asyncHandler(async function (req, res, next) {
    const id = Number(req.params.id)

    const room = await Room.findOne({
        where:{
            from_user_id:id
        }
    })
    res.json(room)
}));

router.get('/message', asyncHandler(async function (req, res, next) {
    const room = await Message.findOne({
        where:{
            roomId:1
        }
    })
}));

router.put("/findroom", asyncHandler(async (req, res, next) => {
    const room = await Room.findOne({
        where:{
            from_user_id:req.body.currentUserId,
            to_user_id:req.body.otherUserId
        }
    })
    const room2 = await Room.findOne({
        where:{
            from_user_id:req.body.otherUserId,
            to_user_id:req.body.currentUserId
        }
    })
    if (!room && !room2) {
        const newRoom = await Room.create({
            from_user_id:req.body.currentUserId,
            to_user_id:req.body.otherUserId,
            from_user:req.body.currentUserName,
            to_user:req.body.selectedUserName
        })
        res.json(newRoom)
    } else if(!room && room2){
        res.json(room2)
    } else if (room && !room2) {
        res.json(room)
    }
}))

module.exports = router;
