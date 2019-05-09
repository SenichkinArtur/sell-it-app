import { takeEvery, put, all } from 'redux-saga/effects';
import { get } from '../api_client/base';
                            
function* watchFetchProducts() {
    yield takeEvery("FETCH_PRODUCTS_REQUEST", fetchProducts);
}

function* fetchProducts() {
    try {
        const result = yield get("/posters/");
        yield put({type: "FETCH_PRODUCTS_SUCCESS", payload: result.data.data});
    } catch(error) {
        yield put ({ type: "FETCH_PRODUCTS_ERROR", payload: error });
    }
}


function* watchFetchSingleProduct() {
    yield takeEvery("FETCH_SINGLE_PRODUCT_REQUEST", fetchSingleProduct);
}

function* fetchSingleProduct(action) {
    try {
        const result = yield get(`/posters/${action.payload}`);
        yield put({type: "FETCH_SINGLE_PRODUCT_SUCCESS", payload: result.data});
    } catch(error) {
        yield put ({ type: "FETCH_SINGLE_PRODUCT_ERROR", payload: error });
    }
}

export default function* productSagas() {
    yield all([ watchFetchProducts(), watchFetchSingleProduct() ]);
}