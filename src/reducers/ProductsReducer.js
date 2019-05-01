const initialState = {
    productList: [],
    isLoaded: false
};

export default function productsReducer(state = initialState, action) {
    switch(action.type) {
        case "FETCH_PRODUCTS_ATTEMPT": 
            return {
                productList: [],
                isLoaded: false
            }
        case "FETCH_PRODUCTS": 
        return { 
            productList: action.payload,
            isLoaded: true
        }

        default:
            return state;
    }
}