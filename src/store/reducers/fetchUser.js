import { updateObject } from '../utility';
import * as actionTypes from '../actions/actionTypes'

const initialState = {
    username: '',
    email: '',
    user: null,
    error: null,
    loading: false
}

const fetchUserStart = (state, action) => {
    return updateObject(state, {
        error: null,
        loading: true
    })
}

const fetchUserSuccess = (state, action) => {
    return updateObject(state, {
        username: action.username,
        email: action.email,
        user: action.user,
        error: null,
        loading: false
    })
}

const fetchUserFail = (state, action) => {
    return updateObject(state, {
        error: action.error,
        loading: false
    })
}

const fetchUserReducer = (state=initialState, action) => {
    switch(action.type) {
        case actionTypes.FETCH_USER_START: return fetchUserStart(state, action);
        case actionTypes.FETCH_USER_SUCCESS: return fetchUserSuccess(state, action);
        case actionTypes.FETCH_USER_FAIL: return fetchUserFail(state, action);
        default:
            return state;
    }
}

export default fetchUserReducer;
