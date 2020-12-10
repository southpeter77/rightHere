import {CURRENT_USER} from "../actions/sessions/currentUser"
export const checkPlaceExist = async(coordinates)=> {
    const response =await fetch("/api/places/check", {
        method:"PUT",
        headers:{
            "Content-Type":"application/json",
        },
        body:JSON.stringify(coordinates)
    })
    if (response.ok) {
        const exist = await response.json()
        return exist.message
    }
}


export const createPost = (data) => async (dispatch) => {
    const response = await fetch("/api/posts/create", {
        method:"PUT",
        body:data
    })
    if (response.ok) {
        const data = await response.json()
        window.location.href=`/profile/${CURRENT_USER}`
    }
}