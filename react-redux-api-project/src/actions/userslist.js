import {usersList} from '../api/postlist';
import {USERS} from './types';

const usersAction = (userId) => {
    return async(dispatch) => {
        let response  = await usersList(userId);
        dispatch({type:USERS, payload:response.data});
    }
};

export default usersAction;