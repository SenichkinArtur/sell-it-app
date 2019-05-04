import { combineReducers } from 'redux'
import productsReducer from './productsReducer';
import { reducer as formReducer } from "redux-form";

export default combineReducers({ productsReducer, form: formReducer });