import {logInErrors, signUpErrors} from "./errors/errors"
import {currentUser, saveToken, loadToken, saveCurrentUserData} from "./sessions/currentUser"
import {grabAllPostsThunk} from "../actions/entities/entities"
export const TOKEN_KEY = "TOKEN_KEY";



////////ACTION CREATORS////////////////////

/////////THUNKS///////////
export const login = ({email, password}) => async (dispatch) => {
    try {
    const response = await fetch(`/api/users/login`, 
    {method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password })}
    );
    if (response.ok) {
        const data = await response.json()
        dispatch(logInErrors([]))
        dispatch(saveCurrentUserData(data))
        dispatch(saveToken(data.token))
        dispatch(grabAllPostsThunk())
      } 
      if (!response.ok){
          throw response
      }
    }catch(err) {
        const badRequest = await err.json();
        const errorArray = badRequest.error.errors
        dispatch(logInErrors(errorArray))
    }
}

export const signUp = (payload) => async (dispatch) => {

    try {
        const response = await fetch(`/api/users/signup`, {
            method:"post",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload)
        })
           if(response.ok) {
                const data = await response.json()
                dispatch(signUpErrors([]))
                // dispatch(currentUser(data.userId))
                // dispatch(saveToken(data.token))
                // dispatch(grabAllPostsThunk())
                dispatch(saveCurrentUserData(data))
                dispatch(saveToken(data.token))
                dispatch(grabAllPostsThunk())

        } else {
            throw response
        }
    } catch(err) {
        const badRequest = await err.json();
        const errorArray = badRequest.error.errors
        dispatch(signUpErrors(errorArray))
    }
    
    }

///////////REDUCER////////////////////////

export default function reducer (state ={}, action) {
    Object.freeze(state);
    let newState = Object.assign({}, state)
    switch(action.type) {
        default :
            return state
    }
}