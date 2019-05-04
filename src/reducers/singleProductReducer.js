const initialState = {
    singleProduct: null,
    isLoaded: false
};

export default function singleProductReducer(state = initialState, action) {
    switch(action.type) {
        case "FETCH_SINGLE_PRODUCT_REQUEST":
            return { 
                productId: action.payload
            }

        case "FETCH_SINGLE_PRODUCT_SUCCESS": 
            return { 
                singleProduct: action.payload,
                isLoaded: true
            }
        
        case "FETCH_SINGLE_PRODUCT_ERROR": 
            return {
                singleProduct: null
            }

        default:
            return state;
    }
}
