import { combineReducers } from 'redux'
import productsReducer from './products';
import userReducer from './user';
import { reducer as formReducer } from "redux-form";

export default combineReducers({
    userReducer,
    productsReducer,
    form: formReducer
});