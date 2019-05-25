import { UserAction } from '../actions/user';
import * as constants from '../constants/index';

interface UserState {
    isLogin: boolean;
    signUpDone: boolean;
    user: {};
    signInError: {};
    signUpError: {};
}

const initialState: UserState = {
    isLogin: false,
    signUpDone: false,
    user: {},
    signInError: {},
    signUpError: {}
};

export default function userReducer(state = initialState, action: UserAction): UserState {
    switch(action.type) {
        case constants.USER_LOGIN_REQUEST:
            return {
                ...state,
                isLogin: false,
                user: action.payload
            }

        case constants.USER_LOGIN_SUCCESS:
            return {
                ...state,
                isLogin: true,
                user: action.payload,
                signUpDone: false,
                signInError: {}
            }

        case constants.USER_LOGIN_ERROR:
            return {
                ...state,
                signInError: action.payload
            }

        case constants.USER_SIGN_UP_REQUEST:
            return {
                ...state,
                signUpDone: false
            }

        case constants.USER_SIGN_UP_SUCCESS:
            return {
                ...state,
                signUpDone: true,
                signUpError: {}
            }

        case constants.USER_SIGN_UP_ERROR:
            return {
                ...state,
                signUpDone: false,
                signUpError: action.payload
            }

        case constants.USER_LOGOUT:
            localStorage.removeItem('jwtToken');
            return {
                ...state,
                isLogin: false,
                user: {}
            }
            
        case constants.ERROR_CLEAR: 
            return {
                ...state,
                signInError: {},
                signUpError: {}
            }

        default:
            return state;
    }
}
