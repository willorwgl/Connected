import { combineReducers } from "redux"
import sessionReducer from "./session_reducer"
import entitiesReducer from "./entities_reducer"
import errorReducer from "./session_error_reducer"

export default combineReducers( {
    entities: entitiesReducer,
    session: sessionReducer,
    errors: errorReducer
})