import { takeEvery, put } from 'redux-saga/effects';
import { signIn, signUp } from '../api_client/user';
import { userLoginRequest, userSignUpRequest } from '../actions/user';
import jwt from 'jsonwebtoken';
import * as constants from '../constants/index';

function* watchUserLogin() {
    yield takeEvery(constants.USER_LOGIN_REQUEST, userLogin);
}

function* userLogin(action: ReturnType<typeof userLoginRequest>) {
    try {
        const result = yield signIn(action.payload);
        localStorage.setItem('jwtToken', result.data.token);
        let user = jwt.decode(result.data.token);
        yield put({type: constants.USER_LOGIN_SUCCESS, payload: user});
    } catch(error) {
        yield put ({ type: constants.USER_LOGIN_ERROR, payload: error.response.data });
    }
}

function* watchUserSignUp() {
    yield takeEvery(constants.USER_SIGN_UP_REQUEST, userSignUp);
}

function* userSignUp(action: ReturnType<typeof userSignUpRequest>) {
    try {
        yield signUp(action.payload);
        yield put({ type: constants.USER_SIGN_UP_SUCCESS });
    } catch(error) {
        yield put ({ type: constants.USER_SIGN_UP_ERROR, payload: error.response.data });
    }
}

export const userSagas = [ watchUserLogin(), watchUserSignUp() ];
