import {createStore,applyMiddleware,compose} from "redux"

import rootReducer from "./index"
import {apiMiddleware} from "../middlewares"

export default function configureStore(initialState){
    const composeEnhanceis=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||compose
    return createStore(rootReducer,initialState,composeEnhanceis(applyMiddleware(apiMiddleware)))
}