import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import thunk from "redux-thunk";
import user from "./actions/user"
import loginError from "./actions/errors/loginError"
import signUpError from "./actions/errors/signUpError"
import currentUserId from "./actions/sessions/currentUserId"
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const reducer = combineReducers ({
    entities:user,
    errors:loginError,
    sessions:currentUserId
})

const configureStore = (initialState) => {
    return createStore(
        reducer,
        initialState,
        composeEnhancers(applyMiddleware(thunk))
    )
}

export default configureStore
