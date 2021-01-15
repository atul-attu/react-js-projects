import {PHOTOS_POST} from "./types";
import {photosPost} from "../api/photolist";

export const photosPostData = () => {
    return async(dispatch) => {
        let response = await photosPost();
        //console.log(response);
        dispatch({
            type:PHOTOS_POST,
            payload:response.data
        });
    }
};