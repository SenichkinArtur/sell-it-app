const initialState = {
    isLoading: null,
    productList: []
};

export default function(state = initialState, action) {
    switch(action.type) {
        case "FETCH_PRODUCTS": 
            return { productList: action.payload }

        default:
            return state;
    }
}