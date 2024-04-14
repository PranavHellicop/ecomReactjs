const CartReducer = (state, action) => {
    switch (action.type) {

        case "RESTORE_ITEM_NUMBER":
            return {
                ...state,
                itemNumber: 1
            }

        case "INCREASE_ITEM":

            return {
                ...state,
                itemNumber: state.itemNumber + 1 < action.payload ? state.itemNumber + 1 : state.itemNumber
            }

        case "DECREASE_ITEM":
            return {
                ...state,
                itemNumber: state.itemNumber - 1 > 0 ? state.itemNumber - 1 : state.itemNumber
            }

        case "ADD_TO_CART":

            const { id, name, price, itemNumber, uniqueId, image } = action.payload
            const subTotal = price * itemNumber
            if (state.itemCount != 0)
                return {
                    ...state,
                    cartItemTotal: state.cartItemTotal + state.itemNumber,
                    cartProducts: [...state.cartProducts, { uniqueId: uniqueId, productId: id, imageUrl: image[0].url, productName: name, itemCount: itemNumber, price: price, subTotal: subTotal }]
                }

        case "REMOVE_CART_ITEM":
            const newCartProducts = state.cartProducts.filter((cartItem) => (cartItem.uniqueId !== action.payload.uniqueId))
            const newItemCount = state.cartItemTotal - action.payload.itemCount
            return {
                ...state,
                cartItemTotal: newItemCount,
                cartProducts: newCartProducts
            }

        case "CLEAR_CART":
                return {
                    ...state,
                    cartItemTotal:0,
                    cartProducts:[]
                }
    }
}

export default CartReducer