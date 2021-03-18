import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
    message: null,
    error: null,
    loading: false
}

const updateProfileStart = (state, action) => {
    return updateObject(state, {
        error: null,
        loading: true
    })
}

const updateProfileSuccess = (state, action) => {
    return updateObject(state, {
        message: action.message,
        error: null,
        loading: false
    })
}

const updateProfileFail = (state, action) => {
    return updateObject(state, {
        error: action.error,
        loading: false
    })
}

const updateProfileReducer = (state=initialState, action) => {
    switch(action.type) {
        case actionTypes.UPDATE_PROFILE_START: return updateProfileStart(state, action);
        case actionTypes.UPDATE_PROFILE_SUCCESS: return updateProfileSuccess(state, action);
        case actionTypes.UPDATE_PROFILE_FAIL: return updateProfileFail(state, action);
        default:
            return state
    }
}

export default updateProfileReducer;