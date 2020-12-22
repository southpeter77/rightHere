export const GRAB_ROOM_CURRENT_AND_OTHER = "GRAB_ROOM_CURRENT_AND_OTHER"

////////////////////

export const grabRoomCurrentAndOther = (data) => {
    return {
        type:GRAB_ROOM_CURRENT_AND_OTHER,
        data
    }
}

/////////////////
export const grabRoomCurrentAndOtherThunk = (payload) => async(dispatch) => {
    const response = await fetch("/api/chats/findroom", {
        method:"put",
        headers:{"Content-Type":"application/json"},
        body: JSON.stringify(payload)
    })
    if (response.ok) {
        const data = await response.json();
        // console.log(data)
        dispatch(grabRoomCurrentAndOther(data))
    }
}
///////////////////
