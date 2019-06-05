import { takeEvery, put } from 'redux-saga/effects';
import { getProducts, getSingleProduct, getSearchProducts, addProduct, deleteProduct } from '../api_client/products';
                            
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
        yield put({type: "FETCH_PRODUCTS_SUCCESS", payload: result.data})
    } catch(error) {
        yield put ({ type: "FETCH_PRODUCTS_ERROR", payload: error });
    }
}


function* watchAddProduct() {
    yield takeEvery("ADD_PRODUCT_REQUEST", addProductWorker);
}

function* addProductWorker(action) {
    try {
        const token = yield localStorage.getItem('jwtToken');
        const headers = { Authorization: `JWT ${token}`};
        yield addProduct(action.payload, headers);
        yield put({ type: "ADD_PRODUCT_SUCCESS" });

    } catch(error) {
        yield put ({ type: "ADD_PRODUCT_ERROR", payload: error });
    }
}


function* watchDeleteProduct() {
    yield takeEvery("DELETE_PRODUCT_REQUEST", deleteProductWorker);
}

function* deleteProductWorker(action) {
    try {
        const token = yield localStorage.getItem('jwtToken');
        const headers = { Authorization: `JWT ${token}`};
        yield deleteProduct(action.payload, headers);
        yield put({ type: "DELETE_PRODUCT_SUCCESS" });

    } catch(error) {
        yield put ({ type: "DELETE_PRODUCT_ERROR", payload: error });
    }
}


export const productSagas = [ 
    watchFetchProducts(),
    watchFetchSingleProduct(),
    watchSearchProducts(),
    watchAddProduct(),
    watchDeleteProduct()
];
