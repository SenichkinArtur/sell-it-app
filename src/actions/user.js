export const userLogin = (data) => {
    return {
        type: "USER_LOGIN_REQUEST",
        payload: data
    }
}

export const userLogout = () => {
    return {
        type: "USER_LOGOUT",
    }
}
