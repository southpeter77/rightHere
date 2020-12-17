import {grabUserInformationByUserId} from "./entities/entities"
import {grabAllFriends} from "./sessions/currentUser"
export const addFriend = (data) => async (dispatch) => {
    const response = await fetch(`/api/relationships/add`,{
        method:"PUT",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(data)

    })
    if (response.ok) {
        const data = await response.json();
        dispatch(grabUserInformationByUserId(data))
    }
}

export const acceptFriendRequest = (data) => async(dispatch) => {
    const response = await fetch(`/api/relationships/accept`, {
        method:"put",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(data)
    })
    if (response.ok) {
        const data = await response.json();
        dispatch(grabAllFriends(data))
    }
}