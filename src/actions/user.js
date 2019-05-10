export const userLogin = (data) => {
    return {
        type: "USER_LOGIN_REQUEST",
        payload: data
    }
}

export const userSignUp = (data) => {
    return {
        type: "USER_SIGN_UP_REQUEST",
        payload: data
    }
}

export const userLogout = () => {
    return {
        type: "USER_LOGOUT",
    }
}
