export const fetchProducts = (page) => {
    return {
        type: "FETCH_PRODUCTS_REQUEST",
        payload: page
    }
}

export const fetchSingleProduct = (id) => {
    return {
        type: "FETCH_SINGLE_PRODUCT_REQUEST",
        payload: id
    }    
}

export const searchValueChange = (value) => {
    return {
        type: "SEARCH_PRODUCTS_REQUEST",
        payload: value
    }
}

export const clearSingleProductState = () => {
    return {
        type: "CLEAR_SINGLE_PRODUCT_STATE",
    }
}
