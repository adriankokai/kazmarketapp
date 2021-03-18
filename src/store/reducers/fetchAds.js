import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
    ads: null,
    error: null,
    loading: false
}

const fetchAdsStart = (state, action) => {
    return updateObject(state, {
        error: null,
        loading: true
    })
}

const fetchAdsSuccess = (state, action) => {
    return updateObject(state, {
        ads: action.ads,
        error: null,
        loading: false
    })
}

const fetchAdsFail = (state, action) => {
    return updateObject(state, {
        error: action.error,
        loading: false
    })
}

const fetchAdsReducer = (state=initialState, action) => {
    switch(action.type) {
        case actionTypes.FETCH_ADS_START: return fetchAdsStart(state, action);
        case actionTypes.FETCH_ADS_SUCCESS: return fetchAdsSuccess(state, action);
        case actionTypes.FETCH_ADS_FAIL: return fetchAdsFail(state, action);
        default:
            return state
    }
}

export default fetchAdsReducer;