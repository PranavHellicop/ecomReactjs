const ProductReducer = (state, action) => {

    switch (action.type) {
        case "SET_LOADING":
            return { ...state, isLoading: true }

        case "SET_PRODUCTS_DATA":
            const featuredProducts = action.payload.filter((item) => (item.featured === true))
            return {
                ...state,
                isLoading: false,
                featuredProducts: featuredProducts,
                products: action.payload
            }

        case "SET_API_ERROR":
            return {
                ...state,
                isLoading:false,
                isError:true
            }
        default:
            return state
    }
}

export default ProductReducer