import {USERS_POST} from "../actions/types";

export const userpostReducer = (state=[], action) => {
    switch(action.type){
        case USERS_POST:
            return action.payload;
            default:
                return state;
    }
};