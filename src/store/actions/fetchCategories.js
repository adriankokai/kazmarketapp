import * as actionTypes from './actionTypes';
import axios from 'axios';
import { BACKEND_URL } from '../utility'

export const fetchCategoriesStart = () => {
    return {
        type: actionTypes.FETCH_CATEGORIES_START
    }
}

export const fetchCategoriesSuccess = categories => {
    return {
        type: actionTypes.FETCH_CATEGORIES_SUCCESS,
        categories: categories
    }
}

export const fetchCategoriesFail = error => {
    return {
        type: actionTypes.FETCH_CATEGORIES_FAIL,
        error: error
    }
}

export const fetchCategories = () => {
    return dispatch => {
        dispatch(fetchCategoriesStart())
        axios.get(BACKEND_URL + 'store/categories/')
        .then(res => {
            dispatch(fetchCategoriesSuccess(res.data))
        })
        .catch(err => {
            dispatch(fetchCategoriesFail(err))
        })
    }
}