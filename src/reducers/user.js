const initialState = {
    isLogin: false,
    signUpDone: false,
    user: {},
    signInError: null,
    signUpError: null
};

export default function userReducer(state = initialState, action) {
    switch(action.type) {
        case "USER_LOGIN_REQUEST":
            return {
                isLogin: false,
                user: action.payload
            }

        case "USER_LOGIN_SUCCESS":
            return {
                isLogin: true,
                user: action.payload,
                signUpDone: false,
                signInError: null
            }

        case "USER_LOGIN_ERROR":
            return {
                ...state,
                signInError: action.payload
            }

        case "USER_SIGN_UP_REQUEST":
            return {
                ...state,
                signUpDone: false
            }

        case "USER_SIGN_UP_SUCCESS":
            return {
                ...state,
                signUpDone: true,
                signUpError: null
            }

        case "USER_SIGN_UP_ERROR":
            return {
                ...state,
                signUpDone: false,
                signUpError: action.payload
            }

        case "USER_LOGOUT":
            localStorage.removeItem('jwtToken');
            return {
                isLogin: false,
                user: {}
            }
            
        case "ERROR_CLEAR": 
            return {
                ...state,
                signInError: null,
                signUpError: null
            }

        default:
            return state;
    }
}