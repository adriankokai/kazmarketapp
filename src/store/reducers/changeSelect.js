import * as actionTypes from '../actions/actionTypes';

const initialState = {
    selectValue: ""
};

const changeSelectReducer = (state=initialState, action) => {
    switch (action.type) {
        case actionTypes.CHANGE_SELECT: return {
            ...state,
            selectValue: action.selectValue 
        };
        default:
            return { ...state };
  }
};

export default changeSelectReducer;