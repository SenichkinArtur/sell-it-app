const initialState = {
    singleProduct: null,
    isLoaded: false
};

export default function singleProductReducer(state = initialState, action) {
    switch(action.type) {
        case "FETCH_SINGLE_PRODUCT_ATTEMPT":
        return { 
            singleProduct: null,
            isLoaded: action.payload
        }

        case "FETCH_SINGLE_PRODUCT": 
            return { 
                singleProduct: action.payload,
                isLoaded: true
            }

        default:
            return state;
    }
}
