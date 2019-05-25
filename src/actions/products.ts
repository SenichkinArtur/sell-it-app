import * as constants from '../constants/index';

interface FetchProductsRequest {
    type: typeof constants.FETCH_PRODUCTS_REQUEST;
}

interface FetchProductsSuccess {
    type: typeof constants.FETCH_PRODUCTS_SUCCESS;
    payload: [];
}

interface FetchProductsError {
    type: typeof constants.FETCH_PRODUCTS_ERROR;
}

interface FetchSingleProductRequest {
    type: typeof constants.FETCH_SINGLE_PRODUCT_REQUEST;
    payload: number;
}

interface FetchSingleProductSuccess {
    type: typeof constants.FETCH_SINGLE_PRODUCT_SUCCESS;
    payload: {};
}

interface FetchSingleProductError {
    type: typeof constants.FETCH_SINGLE_PRODUCT_ERROR;
}

interface SearchValueChange {
    type: typeof constants.SEARCH_PRODUCTS_REQUEST;
    payload: string;
}

export type Action = FetchProductsRequest
    | FetchProductsSuccess
    | FetchProductsError
    | FetchSingleProductRequest
    | FetchSingleProductSuccess
    | FetchSingleProductError
    | SearchValueChange;


export const fetchProducts = (): FetchProductsRequest => {
    return {
        type: constants.FETCH_PRODUCTS_REQUEST
    }
}

export const fetchProductsSuccess = (): FetchProductsSuccess => {
    return {
        type: constants.FETCH_PRODUCTS_SUCCESS,
        payload: []
    }
}

export const fetchProductsError = (): FetchProductsError => {
    return {
        type: constants.FETCH_PRODUCTS_ERROR
    }
}

export const fetchSingleProduct = (id: number): FetchSingleProductRequest => {
    return {
        type: constants.FETCH_SINGLE_PRODUCT_REQUEST,
        payload: id
    }    
}

export const fetchSingleProductSuccess = (): FetchSingleProductSuccess => {
    return {
        type: constants.FETCH_SINGLE_PRODUCT_SUCCESS,
        payload: {}
    }
}

export const fetchSingleProductError = (): FetchSingleProductError => {
    return {
        type: constants.FETCH_SINGLE_PRODUCT_ERROR
    }
}

export const searchValueChange = (value: string): SearchValueChange => {
    return {
        type: constants.SEARCH_PRODUCTS_REQUEST,
        payload: value
    }
}
