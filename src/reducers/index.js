import { combineReducers } from 'redux'
import productsReducer from './ProductsReducer';
import singleProductReducer from './SingleProductReducer';

export default combineReducers({ productsReducer, singleProductReducer });