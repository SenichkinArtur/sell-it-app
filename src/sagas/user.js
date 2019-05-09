import { takeEvery, put, all } from 'redux-saga/effects';
import { post } from '../api_client/base';


function* watchUserLogin() {
    yield takeEvery("USER_LOGIN_REQUEST", userLogin);
}

function* userLogin() {
    try {
        const result = yield post('/login/');
        yield put({type: "USER_LOGIN_SUCCESS", payload: result});
    } catch(error) {
        yield put ({ type: "USER_LOGIN_ERROR", payload: error });
    }
}

export default function* userSagas() {
    yield all([ watchUserLogin() ]);
}