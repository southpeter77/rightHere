export const CURRENT_USER_ID = "CURRENT_USER_ID"
export const SET_TOKEN = "SET_TOKEN";
export const REMOVE_TOKEN = "REMOVE_TOKEN";
export const TOKEN_KEY = "TOKEN_KEY";

////////ACTION CREATORS////////////////////
export const currentUserId = (id) => {
    return {
        type: CURRENT_USER_ID,
        id
    }
}
export const setToken = (token) => {
    return {
        type: SET_TOKEN,
        token
    }
}
export const removeToken = () => {
    return {
        type:REMOVE_TOKEN
    }
}

/////////THUNKS///////////
export const loadToken = () => async (dispatch) => {
    const token = window.localStorage.getItem(TOKEN_KEY);
    if (token) {
        dispatch(setToken(token));
    }
};

export const saveToken = (tokendata) => async (dispatch) => {
    window.localStorage.setItem(TOKEN_KEY, tokendata);
    dispatch(setToken(tokendata));
    
};

export const deleteToken = () => async (dispatch)=> {
    window.localStorage.removeItem(TOKEN_KEY);
    dispatch(removeToken())
}

///////////REDUCER////////////////////////

export default function reducer(state = {}, action) {
    Object.freeze(state);
    let newState = Object.assign({}, state)
    switch (action.type) {
        case CURRENT_USER_ID:
            newState["currentUserId"] = action.id
            return newState
        case SET_TOKEN:
            newState["currentToken"] = action.token
            return newState
        case REMOVE_TOKEN:
            newState["currentToken"] = null
            return newState
        default:
            return state
    }
}