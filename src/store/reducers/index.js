import { combineReducers } from 'redux';
import fetchCategoriesReducer from './fetchCategories';
import authReducer from './auth';
import fetchUserReducer from './fetchUser';
import postAdReducer from './postAd';
import changeSelectReducer from './changeSelect';
import fetchAdsReducer from './fetchAds';
import updateProfileReducer from './updateProfile';

const rootReducer = combineReducers({
    fetchCategories: fetchCategoriesReducer,
    auth: authReducer,
    fetchUser: fetchUserReducer,
    postAd: postAdReducer,
    changeSelect: changeSelectReducer,
    fetchAds: fetchAdsReducer,
    updateProfile: updateProfileReducer
    
})

export default rootReducer;