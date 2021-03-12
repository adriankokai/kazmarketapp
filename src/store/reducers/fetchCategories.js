import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
    categories: null,
    error: null,
    loading: false
}

const fetchCategoriesStart = (state, action) => {
    return updateObject(state, {
        error: null,
        loading: true
    })
}

const fetchCategoriesSuccess = (state, action) => {
    return updateObject(state, {
        categories: action.categories,
        error: null,
        loading: false
    })
}

const fetchCategoriesFail = (state, action) => {
    return updateObject(state, {
        error: action.error,
        loading: false
    })
}

const fetchCategoriesReducer = (state=initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_CATEGORIES_START: return fetchCategoriesStart(state, action);
        case actionTypes.FETCH_CATEGORIES_SUCCESS: return fetchCategoriesSuccess(state, action);
        case actionTypes.FETCH_CATEGORIES_FAIL: return fetchCategoriesFail(state, action);
        default:
            return state
    }
}

export default fetchCategoriesReducer;