import * as constants from '../constants/index';

interface UserLoginRequest {
    type: typeof constants.USER_LOGIN_REQUEST;
    payload: {};
}

interface UserLoginSuccess {
    type: typeof constants.USER_LOGIN_SUCCESS;
    payload: {};
}

interface UserLoginError {
    type: typeof constants.USER_LOGIN_ERROR;
    payload: {};
}

interface UserSignUpRequest {
    type: typeof constants.USER_SIGN_UP_REQUEST;
    payload: {}
}

interface UserSignUpSuccess {
    type: typeof constants.USER_SIGN_UP_SUCCESS;
}

interface UserSignUpError {
    type: typeof constants.USER_SIGN_UP_ERROR;
    payload: {};
}

interface UserLogout {
    type: typeof constants.USER_LOGOUT;
}

interface ErrorClear {
    type: typeof constants.ERROR_CLEAR;
}

export type UserAction = UserLoginRequest
    | UserLoginSuccess
    | UserLoginError
    | UserSignUpRequest
    | UserSignUpSuccess
    | UserSignUpError
    | UserLogout
    | ErrorClear;

export const userLoginRequest = (data: {}): UserLoginRequest => {
    return {
        type: constants.USER_LOGIN_REQUEST,
        payload: data
    }
}

export const userLoginSuccess = (): UserLoginSuccess => {
    return {
        type: constants.USER_LOGIN_SUCCESS,
        payload: {}
    }
}

export const userLoginError = (data: {}): UserLoginError => {
    return {
        type: constants.USER_LOGIN_ERROR,
        payload: data
    }
}

export const userSignUpRequest = (data: {}): UserSignUpRequest => {
    return {
        type: constants.USER_SIGN_UP_REQUEST,
        payload: data
    }
}

export const userSignUpSuccess = (): UserSignUpSuccess => {
    return {
        type: constants.USER_SIGN_UP_SUCCESS
    }
}

export const userSignUpError = (data: {}): UserSignUpError => {
    return {
        type: constants.USER_SIGN_UP_ERROR,
        payload: data
    }
}

export const userLogout = (): UserLogout => {
    return {
        type: constants.USER_LOGOUT,
    }
}

export const errorClear = (): ErrorClear => {
    return {
        type: constants.ERROR_CLEAR
    }
}
