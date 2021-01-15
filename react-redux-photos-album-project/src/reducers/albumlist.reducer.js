import {ALBUMS} from "../actions/types";

const fetchalbumlistData = (state=[],action) => {
    switch(action.type){
        case ALBUMS:
            return [...state,action.payload];
        default:
            return state;
    }
};

export default fetchalbumlistData;