const {Room, Message} = require("../../db/models")

const addMessageToRoom = async (name, room, message, roomId) => {
    console.log(name, room, message)
    try {
        const room = await Room.findByPk(roomId);
        const newMessage = await Message.create({
            text:message,
            name:name,
            roomId
        })
        return{room, newMessage}
    }catch(e) {
        console.log(e)
    }
}

module.exports = {
    addMessageToRoom
}