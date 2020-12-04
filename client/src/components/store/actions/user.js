import {logInErrors} from "./errors/loginError"
import {currentUserId} from "./sessions/currentUserId"
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
        dispatch(currentUserId(data.userId))
        window.localStorage.setItem(TOKEN_KEY,data.token)
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
                console.log('good',data)
        } else {
            throw response
        }
    } catch(err) {
        const badRequest = await err.json();
        console.log('bad',badRequest)
        // dispatch(signinErrorArray(arrayOfError))
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