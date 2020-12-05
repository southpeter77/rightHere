export const CURRENT_USER = "CURRENT_USER"
export const SET_TOKEN = "SET_TOKEN";
export const REMOVE_TOKEN = "REMOVE_TOKEN";
export const TOKEN_KEY = "TOKEN_KEY";
export const REMOVE_CURRENT_USER = "REMOVE_CURRENT_USER"
////////ACTION CREATORS////////////////////
export const currentUser = (data) => {
    return {
        type: CURRENT_USER,
        data
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
export const removeCurrentUser = (data) => {
    return {
        type: REMOVE_CURRENT_USER,
        data
    }
}

/////////THUNKS///////////
export const saveCurrentUserData=(data)=> (dispatch) => {
    window.localStorage.setItem(CURRENT_USER,JSON.stringify(data))
    dispatch(currentUser(data))
}

export const loadToken = () => async (dispatch) => {
    const token = window.localStorage.getItem(TOKEN_KEY);
    if (token) {
        dispatch(setToken(token));
    }
};

export const loadCurrentUser = () => async (dispatch) => {
    const userInformation = window.localStorage.getItem(CURRENT_USER);
    if (userInformation) {
        dispatch(currentUser(JSON.parse(userInformation)));
    }
};

export const saveToken = (tokendata) => async (dispatch) => {
    window.localStorage.setItem(TOKEN_KEY, tokendata);
    dispatch(setToken(tokendata));
    
};

export const logOutThunk = () => async (dispatch)=> {
    window.localStorage.removeItem(TOKEN_KEY);
    window.localStorage.removeItem(CURRENT_USER);
    dispatch(removeToken())
    dispatch(removeCurrentUser())
}

///////////REDUCER////////////////////////

export default function reducer(state = {}, action) {
    Object.freeze(state);
    let newState = Object.assign({}, state)
    switch (action.type) {
        case CURRENT_USER:
            newState["currentUser"] = {
                id: action.data.userId,
                email: action.data.email,
                firstName: action.data.firstName,
                lastName: action.data.lastName,
                biography: action.data.biography,
                posts: action.data.posts,
                places:action.data.places,
                photos:action.data.photos
            }
            return newState
        case SET_TOKEN:
            newState["currentToken"] = action.token
            return newState
        case REMOVE_CURRENT_USER:
            newState["currentUser"] = null
            return newState
        case REMOVE_TOKEN:
            newState["currentToken"] = null
            return newState
        default:
            return state
    }
}