export const fetchSingleProduct = (id) => {
    return {
        type: "FETCH_SINGLE_PRODUCT_REQUEST",
        payload: id
    }    
}