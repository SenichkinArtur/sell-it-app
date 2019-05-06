const initialState = {
    isLogin: false,
    user: {}
};

export default function userReducer(state = initialState, action) {
    switch(action.type) {
        case "USER_LOGIN_REQUEST":
            return {
                isLogin: false
            }

        case "USER_LOGIN_SUCCESS":
            return {
                isLogin: true,
                user: action.payload
            }

        case "USER_LOGIN_ERROR":
            return {
                ...state,
            }

        case "USER_LOGOUT": 
            return {
                isLogin: false,
                user: {}
            }

        default:
            return state;
    }
}