import axios from 'axios';
import * as actionTypes from './actionTypes';
import { BACKEND_URL } from '../utility'

export const fetchUserStart = () => {
    return {
        type: actionTypes.FETCH_USER_START
    }
}

export const fetchUserSuccess = user => {
    return {
        type: actionTypes.FETCH_USER_SUCCESS,
        username: user.username,
        email: user.email,
        user: user
    }
}

export const fetchUserFail = error => {
    return {
        type: actionTypes.FETCH_USER_FAIL,
        error: error
    }
}

export const fetchUser = () => {
    return dispatch => {
        dispatch(fetchUserStart());
        axios.get(BACKEND_URL + 'rest-auth/user/', {
            headers: {
                "Authorization": `Token ${localStorage.getItem('token')}`
            }
		})
		.then(res => {
			dispatch(fetchUserSuccess(res.data))
		})
		.catch(err => {
			dispatch(fetchUserFail(err))
		})
    }
}