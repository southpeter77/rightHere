import merge from 'lodash'
import { TOKEN_KEY } from "../sessions/currentUser"

export const GRAB_ALL_POSTS = "GRAB_ALL_POSTS"
export const GRAB_PLACE_BY_ID = "GRAB_PLACE_BY_ID"
export const GRAB_ALL_PLACES = "GRAB_ALL_PLACES"
export const GRAB_ALL_POSTS_BY_PLACE_ID = 'GRAB_ALL_POSTS_BY_PLACE_ID'
export const GRAB_ALL_PLACES_BY_USER_ID = "GRAB_ALL_PLACES_BY_USER_ID"
export const GRAB_ALL_POSTS_BY_USER_ID = "GRAB_ALL_POSTS_BY_USER_ID"

///////////////////////////////////////////////
export const grabAllPosts = (data) => {
    return {
        type: GRAB_ALL_POSTS,
        data
    }
}

export const grablAllPlaces = (data) => {
    return {
        type: GRAB_ALL_PLACES,
        data
    }
}

export const grabPlaceById = (data) => {
    return {
        type: GRAB_PLACE_BY_ID,
        data
    }
}

export const grabAllPostsByPlaceId = (data) => {
    return {
        type: GRAB_ALL_POSTS_BY_PLACE_ID,
        data
    }
}

export const grabAllPlacesByUserId = (data) => {
    return {
        type: GRAB_ALL_PLACES_BY_USER_ID,
        data
    }
}

export const grabAllPostsByUserId = (data) => {
    return {
        type:GRAB_ALL_POSTS_BY_USER_ID,
        data
    }
}
//////////////////////////////////////////////

export const grabAllPostsThunk = () => async (dispatch) => {
    const response = await fetch("/api/posts");
    if (response.ok) {
        const data = await response.json();
        // console.log(data)
        window.localStorage.setItem(GRAB_ALL_POSTS, JSON.stringify(data))
        await dispatch(grabAllPosts(data))
    }
}

export const grablAllPlacesThunk = () => async (dispatch) => {
    const response = await fetch("/api/places/all");
    if (response.ok) {
        const data = await response.json();
        window.localStorage.setItem(GRAB_ALL_PLACES, JSON.stringify(data))
        await dispatch(grablAllPlaces(data))
        // console.log(data)
    }
}

export const grabPlaceByIdThunk = (id) => async (dispatch) => {
    // console.log("grabp place b id")
    const response = await fetch(`/api/places/${id}`)
    if (response.ok) {
        const data = await response.json();
        // window.localStorage.setItem(GRAB_PLACE_BY_ID,JSON.stringify(data))
        // console.log(data)
        await dispatch(grabPlaceById(data))
        // window.localStorage.setItem(GRAB_PLACE_BY_ID, JSON.stringify(data))
    }
}

export const grabPostsByPlaceIdThunk = (id) => async (dispatch) => {
    const response = await fetch(`/api/posts/place/${id}`)
    if (response.ok) {
        const data = await response.json();
        await dispatch(grabAllPostsByPlaceId(data))
    }
}


export const grabAllPlacesByUserIdThunk = (userId) => async (dispatch) => {
    const response = await fetch(`/api/places/user/${userId}`)
    if (response.ok) {
        const data = await response.json();
        await dispatch(grabAllPlacesByUserId(data))
        // console.log(data)
    }
}


export const grabAllPostsByUserIdThunk = (userId) => async (dispatch) => {
    const response = await fetch(`/api/posts/user/${userId}`)
    if (response.ok) {
        const data = await response.json();
        console.log(data)
    }
}




export default function reducer(state = {}, action) {
    Object.freeze(state);
    let newState = Object.assign({}, state)
    switch (action.type) {
        case GRAB_ALL_POSTS:
            newState["posts"] = { byId: {}, allId: [] }
            let mappedData = action.data.map(each => {
                return {
                    id: each.id,
                    name: each.name,
                    description: each.description,
                    coordinates: each.coordinates,
                    user_id: each.user_id,
                    place_id: each.place_id,
                    photos: each.Photos,
                    places: each.Place,
                    user: each.User
                }

            })
            // mappedData.forEach(each=>{
            //     newState.posts.byId[each.id]={...each}
            //     newState.posts.allId=[...newState.posts.allId, each.id]
            // })
            newState.posts.byId = mappedData

            return newState

        case GRAB_PLACE_BY_ID:
            newState["place"] = { byId: {}, allId: [] }
            let placeGrabbedById = {
                id: action.data.id,
                name: action.data.name,
                description: action.data.description,
                coordinates: JSON.parse(action.data.coordinates),
                photos: action.data.Photos,
                posts: action.data.Posts,
                User: action.data.User
            }

            newState.place.byId = placeGrabbedById
            newState.place.allId = [...newState.places.allId, placeGrabbedById.id]

            return newState

        case GRAB_ALL_POSTS_BY_PLACE_ID:
            newState["posts"] = { byId: {}, allId: [] }
            let postsByPlaceId = action.data.map(each => {
                return {
                    id: each.id,
                    name: each.name,
                    description: each.description,
                    coordinates: JSON.parse(each.coordinates),
                    place_id: each.place_id,
                    user_id: each.user_id,
                    photos: each.Photos,
                    users: each.User
                }
            })
            postsByPlaceId.forEach(each => {
                newState.posts.byId[each.id] = { ...each }
                newState.posts.allId = [...newState.posts.allId, each.id]
            })
            return newState

        case GRAB_ALL_PLACES:
            newState["places"] = { byId: {}, allId: [] }
            let allPlaces = action.data.map(each => {
                return {
                    id: each.id,
                    name: each.name,
                    coordinates: each.coordinates,
                    description: each.description,
                    user_id: each.user_id,
                    User: each.User,
                    Photos: each.Photos,
                    Posts: each.Posts
                }
            })
            allPlaces.forEach(each => {
                newState.places.byId[each.id] = { ...each }
                newState.places.allId = [...newState.places.allId, each.id]
            })
            return newState
        case GRAB_ALL_PLACES_BY_USER_ID:
            newState["places"] = { byId: {}, allId: [] }
            let allPlacesByUserId = action.data.map(each => {
                return {
                    id: each.id,
                    name: each.name,
                    coordinates: each.coordinates,
                    description: each.description,
                    user_id: each.user_id,
                    User: each.User,
                    Photos: each.Photos,
                    Posts: each.Posts
                }
            })
            allPlacesByUserId.forEach(each => {
                newState.places.byId[each.id] = { ...each }
                newState.places.allId = [...newState.places.allId, each.id]
            })
            return newState

        default:
            return state
    }
}