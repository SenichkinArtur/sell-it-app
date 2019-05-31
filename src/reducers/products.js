const initialState = {
    productList: [],
    singleProduct: null,
    searchValue: ""
};

export default function productsReducer(state = initialState, action) {
    switch(action.type) {
        case "FETCH_PRODUCTS_REQUEST": 
            return {
                ...state,
                productList: [],
                singleProduct: null
            }

        case "FETCH_PRODUCTS_SUCCESS": 
            return {
                ...state,
                productList: action.payload,
            }

        case "FETCH_PRODUCTS_ERROR":
            return {
                ...state,
            }

        
        case "FETCH_SINGLE_PRODUCT_REQUEST":
            return { 
                ...state,
                singleProduct: null,
            }

        case "FETCH_SINGLE_PRODUCT_SUCCESS":
            return {
                ...state,
                singleProduct: action.payload,
            }
        
        case "FETCH_SINGLE_PRODUCT_ERROR":
            return {
                ...state,
            }

        case "CLEAR_SINGLE_PRODUCT_STATE":
            return {
                ...state,
                singleProduct: null
            }

        case "SEARCH_PRODUCTS_REQUEST":
            return {
                ...state,
                searchValue: action.payload
            }

        default:
            return state;
    }
}
