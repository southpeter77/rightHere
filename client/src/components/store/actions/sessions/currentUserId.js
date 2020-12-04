export const CURRENT_USER_ID ="CURRENT_USER_ID"

////////ACTION CREATORS////////////////////


export const currentUserId = (id) => {
    return {
        type:CURRENT_USER_ID,
        id
    }
}

/////////THUNKS///////////



///////////REDUCER////////////////////////

export default function reducer (state ={}, action) {
    Object.freeze(state);
    let newState = Object.assign({}, state)
    switch(action.type) {
        case CURRENT_USER_ID:
            newState["currentUserId"]=action.id
            return newState
        default :
            return state
    }
}