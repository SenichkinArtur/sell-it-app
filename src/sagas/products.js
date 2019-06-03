import { takeEvery, put } from 'redux-saga/effects';
import { getProducts, getSingleProduct, getSearchProducts } from '../api_client/products';
                            
function* watchFetchProducts() {
    yield takeEvery("FETCH_PRODUCTS_REQUEST", fetchProducts);
}

function* fetchProducts(action) {
    try {
        const result = yield getProducts(action.payload);
        yield put({type: "FETCH_PRODUCTS_SUCCESS", payload: result.data});
    } catch(error) {
        yield put ({ type: "FETCH_PRODUCTS_ERROR", payload: error });
    }
}


function* watchFetchSingleProduct() {
    yield takeEvery("FETCH_SINGLE_PRODUCT_REQUEST", fetchSingleProduct);
}

function* fetchSingleProduct(action) {
    try {
        const result = yield getSingleProduct(action.payload);
        yield put({type: "FETCH_SINGLE_PRODUCT_SUCCESS", payload: result.data});
    } catch(error) {
        yield put ({ type: "FETCH_SINGLE_PRODUCT_ERROR", payload: error });
    }
}

function* watchSearchProducts() {
    yield takeEvery("SEARCH_PRODUCTS_REQUEST", searchProducts);
}

function* searchProducts(action) {
    try {
        const result = yield getSearchProducts(action.payload);
        yield put({type: "FETCH_PRODUCTS_SUCCESS", payload: result.data.data})
    } catch(error) {
        yield put ({ type: "FETCH_PRODUCTS_ERROR", payload: error });
    }
}

export const productSagas = [ watchFetchProducts(), watchFetchSingleProduct(), watchSearchProducts() ];