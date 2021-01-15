import {combineReducers} from "redux";
import {userpostReducer} from "../reducers/userposts.reducer";
import fetchuserslistdata from "../reducers/userslist.reducers";

const reducers = combineReducers({post:userpostReducer, users:fetchuserslistdata});

export default reducers; 