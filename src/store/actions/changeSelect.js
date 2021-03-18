import * as actionTypes from './actionTypes';

export const changeSelect = selectValue => {
    return {
        type: actionTypes.CHANGE_SELECT,
        selectValue: selectValue
    }
}