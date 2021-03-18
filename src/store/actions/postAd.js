import * as actionTypes from './actionTypes';
import axios from 'axios';
import { BACKEND_URL } from '../utility';

export const postAdStart = () => {
    return {
        type: actionTypes.POST_AD_START
    }
}

export const postAdSuccess = message => {
    return {
        type: actionTypes.POST_AD_SUCCESS,
        message: message
    }
}

export const postAdFail = error => {
    return {
        type: actionTypes.POST_AD_FAIL,
        error: error
    }
}

export const postAd = (
    title, category, subcategory, location, description, image1, image2, phone
) => {
    return dispatch => {
        dispatch(postAdStart())
        axios.post(BACKEND_URL + 'store/post_ad/', {
            title, category, subcategory, location, description, image1, image2, phone
        }, {
            headers: {
                Authorization: `token ${localStorage.getItem('token')}`
            }
        })
        .then(res => {
            dispatch(postAdSuccess(res.data))
        })
        .catch(err => {
            dispatch(postAdFail(err))
        })
    }
}