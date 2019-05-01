import axios from 'axios';

export const fetchSingleProduct = (id) => dispatch => {
    dispatch({
        type: "FETCH_SINGLE_PRODUCT_ATTEMPT",
        payload: false
    })

    let url = `http://light-it-04.tk/api/posters/${id}/`;
    axios.get(url)
    .then(
        (res) => {
            dispatch({
                type: "FETCH_SINGLE_PRODUCT",
                payload: res.data
            })
        }
    )
}