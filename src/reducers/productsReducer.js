const initialState = {
    productList: [],
    isLoaded: false
};

export default function productsReducer(state = initialState, action) {
    switch(action.type) {
        case "FETCH_PRODUCTS_REQUEST": 
            return {
                productList: [],
                isLoaded: false
            }
        case "FETCH_PRODUCTS_SUCCESS": 
            return { 
                productList: action.payload,
                isLoaded: true
            }
        case "FETCH_PRODUCTS_ERROR":
            return {
                productList: []
            }

        default:
            return state;
    }
}
