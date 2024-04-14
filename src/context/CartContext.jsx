import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "../reducer/CartReducer"

const CartContext = createContext()

const getLocalCartData = () => {
    const localCartData = localStorage.getItem("myCartProducts")
    console.log(typeof JSON.parse(localCartData)); 
    if (localCartData == {}) {
        return []
    } else {
        return JSON.parse(localCartData)
    }
}


const cartItemTotal = () => {
    const localCartItemTotal = localStorage.getItem("myCartItemTotal")
    return JSON.parse(localCartItemTotal)
}

const initialState = {
    itemNumber: 1, //no. of units of each items 
    cartItemTotal: cartItemTotal(), //count of total number of items currently in the cart
    cartProducts: getLocalCartData(),    //products added in the cart
}


const useCartContext = () => {
    return useContext(CartContext)
}

const CartContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    const addToCart = () => {
        dispatch({ type: "ADD_TO_CART" })
    }

    const restoreItem = () => {
        dispatch({ type: "RESTORE_ITEM_NUMBER" })
    }

    useEffect(() => {
        localStorage.setItem('myCartProducts', JSON.stringify(state.cartProducts));
        localStorage.setItem('myCartItemTotal', JSON.stringify(state.cartItemTotal));
    }, [state.cartProducts])

    return (
        <CartContext.Provider value={{ ...state, dispatch, addToCart, restoreItem }}  >
            {children}
        </CartContext.Provider>
    )

}

export { CartContextProvider, useCartContext }