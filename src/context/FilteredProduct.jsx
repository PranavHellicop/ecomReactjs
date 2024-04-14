import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "../reducer/FilterReducer"
import { useProductContext } from "./ProductContext"


const FilterContext = createContext()

const useFilterContext = () => {
    return useContext(FilterContext)
}

const initialState = {
    sortedProducts: [],
    sortingValue: "ascending",
    filterValue: {
        text: "",
        category:"All",
        company:"All",
        price:12599,
        color:"All"
    },
    allProducts: []
}
const FilteredProductContextProvider = ({ children }) => {
    const { products } = useProductContext()
    const [state, dispatch] = useReducer(reducer, initialState)
   

    const filterFunc = (e) => {
        const name =  e.target.name
        const value = e.target.value
        console.log("name:",name);
        console.log("value:",value);

        dispatch({ type: "FILTER_VALUE", payload: { name, value } })       
    }
    const sorting = (e) => {
        const sortValue = e.target.value
        dispatch({ type: "GET_SORT_VALUE", payload: sortValue })
    }

    useEffect(()=>{
        dispatch({type:"LOAD_FILTER_PRODUCTS",payload:products})
    },[products])
    
    useEffect(() => {
        dispatch({ type: "FILTER_PRODUCTS" })
        dispatch({ type: "SORTING_VALUES", payload: products })
    }, [products, state?.sortingValue,state.filterValue])

    const clearFilter  = ()=>{
        dispatch({type:"CLEAR_FILTERS"})
    }
  
    return (
        <FilterContext.Provider value={{ ...state, sorting, filterFunc,clearFilter }}>
            {children}
        </FilterContext.Provider>

    )
}

export { FilteredProductContextProvider, useFilterContext }