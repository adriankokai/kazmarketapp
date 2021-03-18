import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
    message: null,
    error: null,
    loading: false
}

const postAdStart = (state, action) => {
    return updateObject(state, {
        error: null,
        loading: true
    })
}

const postAdSuccess = (state, action) => {
    return updateObject(state, {
        message: action.message,
        error: null,
        loading: false
    })
}

const postAdFail = (state, action) => {
    return updateObject(state, {
        error: action.error,
        loading: false
    })
}

const postAdReducer = (state=initialState, action) => {
    switch (action.type) {
        case actionTypes.POST_AD_START: return postAdStart(state, action);
        case actionTypes.POST_AD_SUCCESS: return postAdSuccess(state, action);
        case actionTypes.POST_AD_FAIL: return postAdFail(state, action);
        default:
            return state
    }
}

export default postAdReducer;