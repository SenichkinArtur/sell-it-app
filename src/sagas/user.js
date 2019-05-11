import { takeEvery, put, all } from 'redux-saga/effects';
import { post } from '../api_client/base';
import jwt from 'jsonwebtoken';

function* watchUserLogin() {
    yield takeEvery("USER_LOGIN_REQUEST", userLogin);
}

function* userLogin(action) {
    try {
        const result = yield post('/login/', action.payload);
        localStorage.setItem('jwtToken', result.data.token);
        let user = jwt.decode(result.data.token);
        yield put({type: "USER_LOGIN_SUCCESS", payload: user});
    } catch(error) {
        yield put ({ type: "USER_LOGIN_ERROR", payload: error.response.data });
    }
}

function* watchUserSignUp() {
    yield takeEvery("USER_SIGN_UP_REQUEST", userSignUp);
}

function* userSignUp(action) {
    try {
        const result = yield post('/registration/', action.payload);
        console.log('result: ', result);
        yield put({ type: "USER_SIGN_UP_SUCCESS" });
    } catch(error) {
        yield put ({ type: "USER_SIGN_UP_ERROR", payload: error.response.data });
    }
}

export default function* userSagas() {
    yield all([ watchUserLogin(), watchUserSignUp() ]);
}