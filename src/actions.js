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

export const fetchSingleProduct = (id) => dispatch => {
    let url = `http://light-it-04.tk/api/posters/${id}/`;
    fetch(url)
    .then(res => res.json())
    .then(
        (res) => {
            console.log(res);
            dispatch({
                type: "FETCH_SINGLE_PRODUCT",
                payload: res
            })
        }
    )
}