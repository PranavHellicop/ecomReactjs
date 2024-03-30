import { createContext, useContext, useEffect, useReducer } from "react";
import axios from "axios";
import reducer from "../reducer/reducer.js"

const ProductContext = createContext();
const API_URL = "https://api.pujakaitem.com/api/products"


//globalProductHook
const useProductContext = () => {    
    return useContext(ProductContext)
}



const ProductContextProvider = ({ children }) => {
    const initialState = {
        products:[],
        featuredProducts: [],
        isLoading:false,
        isError:false
    }
    const [state,dispatch] = useReducer(reducer,initialState)
    const getData = async (url) => {
        dispatch({type:"SET_LOADING"})
        try {
            const res = await axios.get(url)
            const products = await res.data
        
            dispatch({type:"SET_PRODUCTS_DATA",payload:products})
        } catch (error) {
            dispatch({type:"SET_API_ERROR"})
        }
    }


    useEffect(() => {
        getData(API_URL)
    }, [])

    return (
        <ProductContext.Provider value={{...state}}>
            {children}
        </ProductContext.Provider>

    )
}

export { ProductContextProvider, useProductContext };