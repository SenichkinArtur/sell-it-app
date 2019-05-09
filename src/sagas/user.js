import { takeEvery, put, all } from 'redux-saga/effects';
import { post } from '../api_client/base';

function* watchUserLogin() {
    yield takeEvery("USER_LOGIN_REQUEST", userLogin);
}

function* userLogin(action) {
    try {
        const result = yield post('/login/', action.payload);
        yield put({type: "USER_LOGIN_SUCCESS", payload: result});
    } catch(error) {
        console.log(error);
        yield put ({ type: "USER_LOGIN_ERROR", payload: error });
    }
}

export default function* userSagas() {
    yield all([ watchUserLogin() ]);
}