import { combineReducers } from 'redux'
import productsReducer from './productsReducer';
import singleProductReducer from './singleProductReducer';
import { reducer as formReducer } from "redux-form";

export default combineReducers({ productsReducer, singleProductReducer, form: formReducer});