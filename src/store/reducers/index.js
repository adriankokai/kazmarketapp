import { combineReducers } from 'redux';
import fetchCategoriesReducer from './fetchCategories';
import authReducer from './auth';
import fetchUserReducer from './fetchUser';

const rootReducer = combineReducers({
    fetchCategories: fetchCategoriesReducer,
    auth: authReducer,
    fetchUser: fetchUserReducer,
    
})

export default rootReducer;