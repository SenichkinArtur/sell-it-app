import axios from 'axios';

export const fetchProducts = () => dispatch => {
    dispatch({
        type: "FETCH_PRODUCTS_ATTEMPT",
        payload: false,
    })

    axios.get("http://light-it-04.tk/api/posters/")
    .then(
        (res) => {
            dispatch({
                type: "FETCH_PRODUCTS",
                payload: res.data.data,
                meta: {
                    printLog: true
                }
            })
        }
    )
}