import { takeEvery, put, all } from 'redux-saga/effects';

function* watchUserLogin() {
    yield takeEvery("USER_LOGIN_REQUEST", userLogin);
}

function* userLogin() {
    try {
        yield put({type: "USER_LOGIN_SUCCESS", payload: true});
    } catch(error) {
        yield put ({ type: "USER_LOGIN_ERROR", payload: error });
    }
}

export default function* userSagas() {
    yield all([ watchUserLogin() ]);
}