import axios from "axios";
import { takeEvery, put, all, call } from 'redux-saga/effects';

function* watchFetchProducts() {
    yield takeEvery("FETCH_PRODUCTS_ATTEMPT", fetchProducts)
}

function* fetchProducts() {
    try {
        const result = yield call(axios.get, "http://light-it-04.tk/api/posters/");
        yield put({type: "FETCH_PRODUCTS", payload: result.data.data});
    } catch(error) {
        yield put ({ type: "FETCH_PRODUCTS_ERROR", payload: error });
    }
}

// function* watchFetchSingleProduct() {
//     yield takeEvery("FETCH_SINGLE_PRODUCT_ATTEMPT", fetchSingleProduct(id));
// }

// function* fetchSingleProduct(id) {
//     try {
//         const result = yield call(axios.get, `http://light-it-04.tk/api/posters/${id}/`);
//         yield put({type: "FETCH_SINGLE_PRODUCT", payload: result.data});
//     } catch(error) {
//         yield put ({ type: "FETCH_SINGLE_PRODUCT_ERROR", payload: error });
//     }
// }

export default function* rootSaga() {
    yield all([ watchFetchProducts(), fetchProducts() ]);
}