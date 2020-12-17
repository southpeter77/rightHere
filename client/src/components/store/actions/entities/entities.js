import merge from 'lodash'
import { TOKEN_KEY } from "../sessions/currentUser"

export const GRAB_ALL_POSTS = "GRAB_ALL_POSTS"
export const GRAB_PLACE_BY_ID = "GRAB_PLACE_BY_ID"
export const GRAB_ALL_PLACES = "GRAB_ALL_PLACES"
export const GRAB_ALL_POSTS_BY_PLACE_ID = 'GRAB_ALL_POSTS_BY_PLACE_ID'
export const GRAB_ALL_PLACES_BY_USER_ID = "GRAB_ALL_PLACES_BY_USER_ID"
export const GRAB_ALL_POSTS_BY_USER_ID = "GRAB_ALL_POSTS_BY_USER_ID"
export const GRAB_ALL_COMMENTS_BY_POST_ID = "GRAB_ALL_COMMENTS_BY_POST_ID"
export const CREATE_AND_DISPATCH_ALL_COMMENTS = "CREATE_AND_DISPATCH_ALL_COMMENTS"
export const GRAB_ALL_LIKES = "GRAB_ALL_LIKES"
export const GRAB_USER_INFORMATION_BY_USER_ID = "GRAB_USER_INFORMATION_BY_USER_ID"
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
        type: GRAB_ALL_POSTS_BY_USER_ID,
        data
    }
}

export const grabAllCommentsByPostId = (data) => {
    return {
        type: GRAB_ALL_COMMENTS_BY_POST_ID,
        data
    }
}

export const createAndDispatchAllComments = (data) => {
    return {
        type: CREATE_AND_DISPATCH_ALL_COMMENTS,
        data
    }
}

export const allLikes = (data) => {
    return {
        type:GRAB_ALL_LIKES,
        data
    }
}

export const grabUserInformationByUserId = (data) => {
    return{
        type:GRAB_USER_INFORMATION_BY_USER_ID,
        data
    }
}

//////////////////////////////////////////////

export const grabAllPostsThunk = () => async (dispatch) => {
    const response = await fetch("/api/posts");
    if (response.ok) {
        const data = await response.json();
        // console.log(data)
        // window.localStorage.setItem(GRAB_ALL_POSTS, JSON.stringify(data))
        await dispatch(grabAllPosts(data))
    }
}

export const grablAllPlacesThunk = () => async (dispatch) => {
    const response = await fetch("/api/places/all");
    if (response.ok) {
        const data = await response.json();
        // window.localStorage.setItem(GRAB_ALL_PLACES, JSON.stringify(data))
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
        // console.log(data)
        dispatch(grabAllPostsByUserId(data))
    }
}

export const grabAllCommentsByPostIdThunk = (postId) => async (dispatch) => {
    const response = await fetch(`/api/comments/post`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ postId: postId })
    })
    // console.log(postId)
    if (response.ok) {
        const data = await response.json();
        // console.log(data)
        dispatch(grabAllCommentsByPostId(data))
    }
}

export const createComment = (data) => async (dispatch) => {
    const response = await fetch("/api/comments/create", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
    })
    if (response.ok) {
        const jsonedData = await response.json()
        dispatch(grabAllCommentsByPostId(jsonedData))
    }
}

export const deleteComment = (data) => async (dispatch) => {
    const response = await fetch("/api/comments/delete", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
    })
    if (response.ok) {
        const jsonedData = await response.json()
        dispatch(grabAllCommentsByPostId(jsonedData))
    }
    // console.log(data)
}

export const grabUserInformationByUserIdThunk = (data) => async (dispatch) => {
    const response = await fetch(`/api/users/profile`, {
        method:"put",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(data)
    });
    if (response.ok) {
        const data = await response.json();
        // console.log(data)
        dispatch(grabUserInformationByUserId(data))
    }
}

//////////////////////////////////////////////////////////
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
                    Photos: each.Photos,
                    Places: each.Place,
                    User: each.User,
                    comments: each.Comments,
                    Likes: each.Likes
                }

            })
            mappedData.forEach(each => {
                newState.posts.byId[each.id] = { ...each }
                newState.posts.allId = [...newState.posts.allId, each.id]
            })
            // newState.posts.byId = mappedData

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
                    place_id: each.place_id,
                    user_id: each.user_id,
                    Photos: each.Photos,
                    Places: each.Place,
                    User: each.User,
                    comments: each.Comments,
                    Likes: each.Likes
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
                    Posts: each.Posts,
                    
                }
            })
            allPlacesByUserId.forEach(each => {
                newState.places.byId[each.id] = { ...each }
                newState.places.allId = [...newState.places.allId, each.id]
            })
            return newState


        //
        case GRAB_ALL_POSTS_BY_USER_ID:
            newState["posts"] = { byId: {}, allId: [] }
            let postsByUserId = action.data.map(each => {
                return {
                    id: each.id,
                    name: each.name,
                    description: each.description,
                    coordinates: JSON.parse(each.coordinates),
                    place_id: each.place_id,
                    user_id: each.user_id,
                    photos: each.Photos,
                    Places:each.Place,
                    User: each.User,
                    comments: each.Comments,
                    Likes: each.Likes
                }
            })
            postsByUserId.forEach(each => {
                newState.posts.byId[each.id] = { ...each }
                newState.posts.allId = [...newState.posts.allId, each.id]
            })
            return newState

        case CREATE_AND_DISPATCH_ALL_COMMENTS:
            newState["comments"] = { byId: {}, allId: [] }
            let allComments = action.data.map(each => {
                return {
                    id: each.id,
                    user_id: each.user_id,
                    description: each.description,
                    post_id: each.post_id,
                    User: each.User,
                    createdAt:each.createdAt
                }
            })
            allComments.forEach(each => {
                newState.comments.byId[each.id] = { ...each }
                newState.comments.allId = [...newState.comments.allId, each.id]
            })
            return newState

        case GRAB_ALL_COMMENTS_BY_POST_ID:
            newState["comments"] = { byId: {}, allId: [] }
            let allCommentByPostId = action.data.map(each => {
                return {
                    id: each.id,
                    user_id: each.user_id,
                    description: each.description,
                    post_id: each.post_id,
                    User: each.User,
                    createdAt:each.createdAt
                }
            })
            allCommentByPostId.forEach(each => {
                newState.comments.byId[each.id] = { ...each }
                newState.comments.allId = [...newState.comments.allId, each.id]
            })
            return newState

            
            case GRAB_ALL_LIKES:
                newState["likes"] = { byId: {}, allId: [] }
                let allLikes = action.data.map(each => {
                    return {
                        id: each.id,
                        user_id: each.user_id,
                        post_id: each.post_id,
                    }
                })

                    newState.likes.byId= allLikes
 
                return newState

            case GRAB_USER_INFORMATION_BY_USER_ID:
                newState["otherUser"] = action.data
                
                return newState
        default:
            return state
    }
}