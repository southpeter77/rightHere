import {allLikes, grabAllPosts, grabAllPostsByPlaceId, grabAllPostsByUserId} from "../actions/entities/entities"

export const likeHandler = (data) => async (dispatch) => {
    const response = await fetch("/api/likes", {
        method:"put",
        headers:{"Content-Type":"application/json"},
        body: JSON.stringify(data)
    })
    if (response.ok) {
        const data = await response.json()
        await dispatch(grabAllPosts(data))

    }
}

export const likeHandlerInPlace = (data) => async (dispatch) => {
    const response = await fetch("/api/likes/place", {
        method:"put",
        headers:{"Content-Type":"application/json"},
        body: JSON.stringify(data)
    })
    if (response.ok) {
        const data = await response.json()
        await dispatch(grabAllPostsByPlaceId(data))

    }
}

export const likeHandlerInProfile = (data) => async (dispatch) => {
    const response = await fetch("/api/likes/profile", {
        method:"put",
        headers:{"Content-Type":"application/json"},
        body: JSON.stringify(data)
    })
    if (response.ok) {
        const data = await response.json()
        await dispatch(grabAllPostsByUserId(data))

    }
}

export const grabALlLikesByPostId = (id) => async (dispatch) => {
    const response = await fetch(`/api/likes/post/${id}`)
    if (response.ok) {
        console.log("ok")
    }
}

export const grabAllLikes = () => async (dispatch) => {
    const response = await fetch(`/api/likes/all`)
    if (response.ok) {
        const data = await response.json();
        // console.log(data)
        dispatch(allLikes(data))
    }
}