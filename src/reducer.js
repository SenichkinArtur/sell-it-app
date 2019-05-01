const initialState = {
    isLoading: null,
    productList: [],
    singleProduct: null,
};

export default function(state = initialState, action) {
    switch(action.type) {
        case "FETCH_PRODUCTS": 
            return { productList: action.payload }

        case "FETCH_SINGLE_PRODUCT": 
            return { singleProduct: action.payload }

        default:
            return state;
    }
}