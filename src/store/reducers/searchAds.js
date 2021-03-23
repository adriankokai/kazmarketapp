import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility'

const initialState = {
    ads: null,
    error: null,
    loading: false
}

const searchAdsStart = (state, action) => {
    return updateObject(state, {
        error: null,
        loading: true
    })
}

const searchAdsSuccess = (state, action) => {
    return updateObject(state, {
        ads: action.ads,
        error: null,
        loading: false
    })
}

const searchAdsFail = (state, action) => {
    return updateObject(state, {
        error: action.error,
        loading: false
    })
}

const searchAdsReducer = (state=initialState, action) => {
    switch(action.type) {
        case actionTypes.SEARCH_ADS_START: return searchAdsStart(state, action);
        case actionTypes.SEARCH_ADS_SUCCESS: return searchAdsSuccess(state, action);
        case actionTypes.SEARCH_ADS_FAIL: return searchAdsFail(state, action);
        default:
            return state
    }
}

export default searchAdsReducer;