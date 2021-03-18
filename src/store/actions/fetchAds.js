import * as actionTypes from './actionTypes';
import axios from 'axios';
import { BACKEND_URL } from '../utility';

export const fetchAdsStart = () => {
    return {
        type: actionTypes.FETCH_ADS_START
    }
}

export const fetchAdsSuccess = ads => {
    return {
        type: actionTypes.FETCH_ADS_SUCCESS,
        ads
    }
}

export const fetchAdsFail = error => {
    return {
        type: actionTypes.FETCH_ADS_FAIL,
        error
    }
}

export const fetchAds = categoryId => {
    return dispatch => {
        dispatch(fetchAdsStart())
        console.log('fetch Ads')
        axios.get(BACKEND_URL + 'store/ads/' + categoryId + '/')
        .then(res => {
            dispatch(fetchAdsSuccess(res.data))
        })
        .catch(err => {
            dispatch(fetchAdsFail(err))
        })
    }
}

export const fetchMyAds = () => {
    return dispatch => {
        dispatch(fetchAdsStart())
        console.log('fetch MyAds')
        axios.get(BACKEND_URL + 'store/myads/', {
            headers: {
                Authorization: `Token ${localStorage.getItem('token')}`
            }
        })
        .then(res => {
            dispatch(fetchAdsSuccess(res.data))
        })
        .catch(err => {
            dispatch(fetchAdsFail(err))
        })
    }
}