export const LOG_IN_ERRORS = "LOG_IN_ERRORS"

///////////////////////////////////////////////

export const logInErrors = (errors)=> {
    return {
        type:LOG_IN_ERRORS,
        errors
    }
}
////////////////////////////////////////////////


///////////////////////////////////////////////
export default function reducer (state ={}, action) {
    Object.freeze(state);
    let newState = Object.assign({}, state)
    switch(action.type) {
        case LOG_IN_ERRORS:
            newState["loginErrors"]=action.errors
            return newState
        default :
            return state
    }
}