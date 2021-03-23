import * as actionTypes from './actionTypes';
import axios from 'axios';
import { BACKEND_URL } from '../utility';

export const searchAdsStart = () => {
    return {
        type: actionTypes.SEARCH_ADS_START
    }
}

export const searchAdsSuccess = ads => {
    return {
        type: actionTypes.SEARCH_ADS_SUCCESS,
        ads
    }
}

export const searchAdsFail = error => {
    return {
        type: actionTypes.SEARCH_ADS_FAIL,
        error
    }
}

export const searchAds = phrase => {
    return dispatch => {
        dispatch(searchAdsStart())
        axios.get(BACKEND_URL + `search_ads/${phrase}`)
        .then(res => {
            dispatch(searchAdsSuccess(res.data))
        })
        .catch(err => {
            dispatch(searchAdsFail(err))
        })
    }
}