const initialState = {
    productList: [],
    ownProductList: [],
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

        case "ADD_PRODUCT_REQUEST": 
            return {
                ...state,
            }

        case "ADD_PRODUCT_SUCCESS": 
            let newOwnProductList = state.ownProductList.concat(action.payload);
            return {
                ...state,
                ownProductList: newOwnProductList
            }

        case "ADD_PRODUCT_ERROR": 
            return {
                ...state,
            }


        case "DELETE_PRODUCT_REQUEST": 
            return {
                ...state,
            }

        case "DELETE_PRODUCT_SUCCESS": 
            let newArr = state.ownProductList.filter(item => item.pk !== action.payload);
            return {
                ...state,
                ownProductList: newArr
            }

        case "DELETE_PRODUCT_ERROR": 
            return {
                ...state,
            }

        case "UPDATE_PRODUCT_REQUEST": 
            return {
                ...state,
            }

        case "UPDATE_PRODUCT_SUCCESS":
            let updatedProducts = [];
            state.ownProductList.forEach(item => {
                if (item.pk !== action.payload.pk) {
                    updatedProducts.push(item);
                } else {
                    updatedProducts.push(action.payload);
                }
            });
            return {
                ...state,
                ownProductList: updatedProducts
            }

        case "UPDATE_PRODUCT_ERROR": 
            return {
                ...state,
            }

        case "FETCH_OWN_PRODUCTS_REQUEST": 
            return {
                ...state,
                ownProductList: []
            }

        case "FETCH_OWN_PRODUCTS_SUCCESS": 
            return {
                ...state,
                ownProductList: action.payload
            }

        case "FETCH_OWN_PRODUCTS_ERROR": 
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
