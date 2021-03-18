import * as actionTypes from './actionTypes';
import axios from 'axios';
import { BACKEND_URL } from '../utility';

export const updateProfileStart = () => {
    return {
        type: actionTypes.UPDATE_PROFILE_START
    }
}

export const updateProfileSuccess = message => {
    return {
        type: actionTypes.UPDATE_PROFILE_SUCCESS,
        message
    }
}

export const updateProfileFail = error => {
    return {
        type: actionTypes.UPDATE_PROFILE_FAIL,
        error
    }
}

export const updateProfile = (first_name, last_name, email) => {
    return dispatch => {
        dispatch(updateProfileStart())
        axios.post(BACKEND_URL + 'users/update_profile/', {
            first_name,
            last_name,
            email
        }, {
            headers: {
                Authorization: `Token ${localStorage.getItem('token')}`
            }
        })
        .then(res => {
            dispatch(updateProfileSuccess(res.data))
        })
        .catch(err => {
            dispatch(updateProfileFail(err))
        })
    }
}