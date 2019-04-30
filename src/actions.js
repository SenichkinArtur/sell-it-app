export const fetchProducts = () => dispatch => {
    fetch("http://light-it-04.tk/api/posters/")
    .then(res => res.json())
    .then(
        (res) => {
            dispatch({
                type: "FETCH_PRODUCTS",
                payload: res.data
            })
        }
    )
}