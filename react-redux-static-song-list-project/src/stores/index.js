import { combineReducers } from "redux";
import {songsReducer, selectedSongReducer} from "../reducers/index";

const reducers = combineReducers({
    songs:songsReducer,
    selectedsong:selectedSongReducer
});

export default reducers;