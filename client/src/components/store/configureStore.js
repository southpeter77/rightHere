import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import thunk from "redux-thunk";
import user from "./actions/user"
import error from "./actions/errors/errors"
import currentUser from "./actions/sessions/currentUser"
import entities from "./actions/entities/entities"
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const reducer = combineReducers ({
    entities:entities,
    errors:error,
    sessions:currentUser
})

const configureStore = (initialState) => {
    return createStore(
        reducer,
        initialState,
        composeEnhancers(applyMiddleware(thunk))
    )
}

export default configureStore
