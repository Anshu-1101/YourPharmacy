import { combineReducers } from "redux";
import {authReducer} from "./Authentication.js";


export default combineReducers({ 
    authentication : authReducer,
})