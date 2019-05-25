import * as constants from '../constants/index';

interface fetchProductsRequest {
    type: typeof constants.FETCH_PRODUCTS_REQUEST;
}

interface fetchProductsSuccess {
    type: typeof constants.FETCH_PRODUCTS_SUCCESS;
    payload: [];
}

interface fetchProductsError {
    type: typeof constants.FETCH_PRODUCTS_ERROR;
}

interface fetchSingleProductRequest {
    type: typeof constants.FETCH_SINGLE_PRODUCT_REQUEST;
    payload: number;
}

interface fetchSingleProductSuccess {
    type: typeof constants.FETCH_SINGLE_PRODUCT_SUCCESS;
    payload: {};
}

interface fetchSingleProductError {
    type: typeof constants.FETCH_SINGLE_PRODUCT_ERROR;
}

interface searchValueChange {
    type: typeof constants.SEARCH_PRODUCTS_REQUEST;
    payload: string;
}

export type Action = fetchProductsRequest
    | fetchProductsSuccess
    | fetchProductsError
    | fetchSingleProductRequest
    | fetchSingleProductSuccess
    | fetchSingleProductError
    | searchValueChange;


export const fetchProducts = (): fetchProductsRequest => {
    return {
        type: "FETCH_PRODUCTS_REQUEST"
    }
}

export const fetchProductsSuccess = (): fetchProductsSuccess => {
    return {
        type: "FETCH_PRODUCTS_SUCCESS",
        payload: []
    }
}

export const fetchProductsError = (): fetchProductsError => {
    return {
        type: "FETCH_PRODUCTS_ERROR"
    }
}

export const fetchSingleProduct = (id: number): fetchSingleProductRequest => {
    return {
        type: "FETCH_SINGLE_PRODUCT_REQUEST",
        payload: id
    }    
}

export const fetchSingleProductSuccess = (): fetchSingleProductSuccess => {
    return {
        type: "FETCH_SINGLE_PRODUCT_SUCCESS",
        payload: {}
    }
}

export const fetchSingleProductError = (): fetchSingleProductError => {
    return {
        type: "FETCH_SINGLE_PRODUCT_ERROR"
    }
}

export const searchValueChange = (value: string): searchValueChange => {
    return {
        type: "SEARCH_PRODUCTS_REQUEST",
        payload: value
    }
}
