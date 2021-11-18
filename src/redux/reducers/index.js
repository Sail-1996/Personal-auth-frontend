import {combineReducers} from "redux"

import user from "./userReducers"
import loading from "./loadingReducers"
import notes from "./notesReducer"
const rootReducer=combineReducers({user,loading,notes})

export default rootReducer