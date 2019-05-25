import { takeEvery, put } from 'redux-saga/effects';
import { getProducts, getSingleProduct, getSearchProducts } from '../api_client/products';
import { fetchSingleProduct, searchValueChange } from '../actions/products';
import * as constants from '../constants/index';

function* watchFetchProducts() {
    yield takeEvery(constants.FETCH_PRODUCTS_REQUEST, fetchProducts);
}

function* fetchProducts() {
    try {
        const result = yield getProducts();
        yield put({type: constants.FETCH_PRODUCTS_SUCCESS, payload: result.data.data});
    } catch(error) {
        yield put ({ type: constants.FETCH_PRODUCTS_ERROR, payload: error });
    }
}


function* watchFetchSingleProduct() {
    yield takeEvery(constants.FETCH_SINGLE_PRODUCT_REQUEST, handleFetchSingleProduct);
}

function* handleFetchSingleProduct(action: ReturnType<typeof fetchSingleProduct>) {
    try {
        const result = yield getSingleProduct(action.payload);
        yield put({type: constants.FETCH_SINGLE_PRODUCT_SUCCESS, payload: result.data});
    } catch(error) {
        yield put ({ type: constants.FETCH_SINGLE_PRODUCT_ERROR, payload: error });
    }
}

function* watchSearchProducts() {
    yield takeEvery(constants.SEARCH_PRODUCTS_REQUEST, handleSearchProducts);
}

function* handleSearchProducts(action: ReturnType<typeof searchValueChange>) {
    try {
        const result = yield getSearchProducts(action.payload);
        yield put({type: constants.FETCH_PRODUCTS_SUCCESS, payload: result.data.data})
    } catch(error) {
        yield put ({ type: constants.FETCH_PRODUCTS_ERROR, payload: error });
    }
}

export const productSagas = [ watchFetchProducts(), watchFetchSingleProduct(), watchSearchProducts() ];
