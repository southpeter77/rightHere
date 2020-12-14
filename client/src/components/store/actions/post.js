import {CURRENT_USER} from "../actions/sessions/currentUser"
import {grabAllPostsByUserId} from "../actions/entities/entities"
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



export const createPostCamera = (data) => async (dispatch) => {
    const response = await fetch("/api/posts/create/camera", {
        method:"PUT",
        body:data
    })
    if (response.ok) {
        const data = await response.json()
        window.location.href=`/profile/${CURRENT_USER}`
    }
}

export const deletePost = (data) => async (dispatch) => {
    const response = await fetch(`/api/posts/delete`,{
        method:"DELETE",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(data)
    });
    if (response.ok){
        const data = await response.json();
        // console.log(data)
        dispatch(grabAllPostsByUserId(data))
    }
}

export const editPost = (data) => async (dispatch) => {
    const response = await fetch(`/api/posts/edit`,{
        method:"PUT",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(data)
    });
    if (response.ok){
        const data = await response.json();
        // console.log(data)
        dispatch(grabAllPostsByUserId(data))
    }
}