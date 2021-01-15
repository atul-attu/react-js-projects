import {albumsList} from "../api/photolist";
import {ALBUMS} from "./types.js";

const albumsAction = (albumId) => {
    return async(dispatch) => {
        let response = await albumsList(albumId);
        dispatch({
            type:ALBUMS,
            payload:response.data
        })
    }
}

export default albumsAction;