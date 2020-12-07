import merge from 'lodash'
export const GRAB_ALL_POSTS = "GRAB_ALL_POSTS"
export const GRAB_PLACE_BY_ID = "GRAB_PLACE_BY_ID"
///////////////////////////////////////////////
export const grabAllPosts = (data) => {
    return {
        type: GRAB_ALL_POSTS,
        data
    }
}

export const grabPlaceById = (data) => {
    return {
        type: GRAB_PLACE_BY_ID,
        data
    }
}
//////////////////////////////////////////////

export const grabAllPostsThunk = () => async (dispatch) => {
    const response = await fetch("/api/posts");
    if (response.ok) {
        const data = await response.json();
        // console.log(data)
        dispatch(grabAllPosts(data))
    }
}

export const grabPlaceByIdThunk = (id) => async (dispatch) => {
    const response = await fetch(`/api/places/${id}`)
    if (response.ok) {
        const data = await response.json();
        // console.log(id)
        dispatch(grabPlaceById(data))
        window.localStorage.setItem(GRAB_PLACE_BY_ID, JSON.stringify(data))
    }
}

export default function reducer(state = {}, action) {
    Object.freeze(state);
    let newState = Object.assign({}, state)
    switch (action.type) {
        case GRAB_ALL_POSTS:
            newState["posts"]={byId:{}, allId:[]}
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
            mappedData.forEach(each=>{
                newState.posts.byId[each.id]={...each}
                newState.posts.allId=[...newState.posts.allId, each.id]
            })
            return newState

        case GRAB_PLACE_BY_ID:
            newState["places"]={byId:{}, allId:[]}
            let placeGrabbedById = {
                    id: action.data.id,
                    name:action.data.name,
                    coordinates: JSON.parse(action.data.coordinates),
                    photos: action.data.Photos,
                    posts: action.data.Posts,
                    User: action.data.User
                }

                newState.places.byId=placeGrabbedById

     
            return newState

        default:
            return state
    }
}