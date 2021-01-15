import {combineReducers} from "redux";
import {photopostReducer} from "../reducers/photoposts.reducers";
import fetchalbumlistData from "../reducers/albumlist.reducer";

const reducers = combineReducers({photo:photopostReducer, albums:fetchalbumlistData});

export default reducers;