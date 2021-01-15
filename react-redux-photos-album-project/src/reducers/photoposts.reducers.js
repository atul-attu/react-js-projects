import {PHOTOS_POST} from "../actions/types";

export const photopostReducer = (state=[],action) => {
    switch(action.type){
        case PHOTOS_POST : 
            return action.payload;
        default : 
            return state;
    }
};