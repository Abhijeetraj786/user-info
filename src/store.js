import {applyMiddleware, combineReducers, compose, createStore} from "redux"
import thunk from 'redux-thunk'
import { userDetailsReducer, userListReducer } from "./Reducers/userReducers";
const reducer=combineReducers({
    userList:userListReducer,
    userDetails:userDetailsReducer,
})
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store= createStore(reducer,composeEnhancer(applyMiddleware(thunk)));
export default store;