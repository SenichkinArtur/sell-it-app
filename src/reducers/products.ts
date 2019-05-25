import { Action } from '../actions/products';
import * as constants from '../constants/index';

interface ProductState {
    productList: [];
    singleProduct: {};
    searchValue: string
}

const initialState: ProductState = {
    productList: [],
    singleProduct: {},
    searchValue: ""
};

export default function productsReducer(state = initialState, action: Action): ProductState {
    switch(action.type) {
        case constants.FETCH_PRODUCTS_REQUEST: 
            return {
                ...state,
            }

        case constants.FETCH_PRODUCTS_SUCCESS:
            return {
                ...state,
                productList: action.payload,
            }

        case constants.FETCH_PRODUCTS_ERROR:
            return {
                ...state,
            }

        case constants.FETCH_SINGLE_PRODUCT_REQUEST:
            return { 
                ...state,
                singleProduct: {},
            }

        case constants.FETCH_SINGLE_PRODUCT_SUCCESS:
            return {
                ...state,
                singleProduct: action.payload,
            }
        
        case constants.FETCH_SINGLE_PRODUCT_ERROR:
            return {
                ...state,
            }

        case constants.SEARCH_PRODUCTS_REQUEST:
            return {
                ...state,
                searchValue: action.payload
            }

        default:
            return state;
    }
}
