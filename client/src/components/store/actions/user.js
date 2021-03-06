import {logInErrors, signUpErrors} from "./errors/errors"
import {currentUser, saveToken, loadToken, saveCurrentUserData, CURRENT_USER} from "./sessions/currentUser"
import {grabAllPostsThunk} from "../actions/entities/entities"
export const TOKEN_KEY = "TOKEN_KEY";
// const currentuserId = JSON.parse(window.localStorage.getItem(CURRENT_USER)).userId



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
    window.localStorage.setItem(CURRENT_USER,JSON.stringify(data))

      await  dispatch(logInErrors([]))
      await dispatch(saveCurrentUserData(data))
      await dispatch(saveToken(data.token))
      await dispatch(grabAllPostsThunk())
      } 
      if (!response.ok){
          throw response
      }
    }catch(err) {
        const badRequest = await err.json();
        const errorArray = badRequest.error.errors
        await dispatch(logInErrors(errorArray))
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
    window.localStorage.setItem(CURRENT_USER,JSON.stringify(data))

                await dispatch(signUpErrors([]))
                // dispatch(currentUser(data.userId))
                // dispatch(saveToken(data.token))
                // dispatch(grabAllPostsThunk())
                await dispatch(saveCurrentUserData(data))
                await dispatch(saveToken(data.token))
                await dispatch(grabAllPostsThunk())

        } else {
            throw response
        }
    } catch(err) {
        const badRequest = await err.json();
        const errorArray = badRequest.error.errors
        await dispatch(signUpErrors(errorArray))
    }
    
    }
    
export const updateBiography = (data) => async(dispatch) => {
    const response = await fetch(`/api/users/biography/edit`,{
        method:"PUT",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(data)
    })
    // console.log("asdf")
    if (response.ok) {
        const data = await response.json()
    window.localStorage.setItem(CURRENT_USER,JSON.stringify(data))

        await dispatch(saveCurrentUserData(data))
        window.location.href=`/myprofile`
      }
}

export const updateProfilePicture = (data) => async(dispatch) =>{
    const response = await fetch(`/api/users/profilephoto/edit`,{
        method:"PUT",
        body:data
    })
    if (response.ok) {
  

        const data = await response.json()
          window.localStorage.setItem(CURRENT_USER,JSON.stringify(data))
        await dispatch(saveCurrentUserData(data))
        window.location.href=`/myprofile`

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