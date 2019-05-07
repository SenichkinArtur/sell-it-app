import { combineReducers } from 'redux'
import productsReducer from './productsReducer';
import userReducer from './userReducer';
import { reducer as formReducer } from "redux-form";

export default combineReducers({
    userReducer,
    productsReducer,
    form: formReducer
});