import axios from "axios";
import { takeEvery, put, all, call } from 'redux-saga/effects';

function* watchFetchProducts() {
    yield takeEvery("FETCH_PRODUCTS_REQUEST", fetchProducts);
}

function* fetchProducts() {
    try {
        const result = yield call(axios.get, "http://light-it-04.tk/api/posters/");
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
        const result = yield call(axios.get, `http://light-it-04.tk/api/posters/${action.payload}`);
        yield put({type: "FETCH_SINGLE_PRODUCT_SUCCESS", payload: result.data});
    } catch(error) {
        yield put ({ type: "FETCH_SINGLE_PRODUCT_ERROR", payload: error });
    }
}

export default function* productSagas() {
    yield all([ watchFetchProducts(), watchFetchSingleProduct() ]);
}