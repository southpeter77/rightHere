import merge from 'lodash'
export const GRAB_ALL_POSTS = "GRAB_ALL_POSTS"

///////////////////////////////////////////////
export const grabAllPosts = (data) => {
    return {
        type: GRAB_ALL_POSTS,
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
        default:
            return state
    }
}