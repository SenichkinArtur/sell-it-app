import axios from 'axios';
import { takeEvery, put, all, call } from 'redux-saga/effects';


function* watchUserLogin() {
    console.log("saga watch");
    yield takeEvery("USER_LOGIN_REQUEST", userLogin);
}

function* userLogin() {
    console.log("saga work");
    try {
        const result = yield call(axios.post, "http://light-it-04.tk/api/login/");
        console.log(result);
        yield put({type: "USER_LOGIN_SUCCESS", payload: result});
    } catch(error) {
        yield put ({ type: "USER_LOGIN_ERROR", payload: error });
    }
}

export default function* userSagas() {
    yield all([ watchUserLogin() ]);
}