import React from 'react'
import { Container, CartProductStrip } from "./index"
import { useCartContext } from '../context/CartContext'
import { Button } from "./index"
import { NavLink } from 'react-router-dom'
import { RiDeleteBin6Fill } from "../icons/icons"

const Cart = () => {
  const { cartProducts, dispatch } = useCartContext()


  return cartProducts.length != 0 ? (
    <Container>
      <div className='w-10/12 mx-auto'>
        <div className='flex justify-between items-center bg-yellow-400 p-2 font-bold'>
          <p>Product Image</p>
          <p>Product Name</p>
          <p>No. of pieces</p>
          <p>Sub Total</p>
        </div>
        <div className=''>
          {
            cartProducts?.map((curEl) => (
              <div className='flex justify-between items-center space-x-2' key={curEl.uniqueId}>
                <CartProductStrip key={curEl.productId} {...curEl} />
                <RiDeleteBin6Fill className='cursor-pointer text-red-500 text-xl' onClick={() => dispatch({ type: "REMOVE_CART_ITEM", payload: { uniqueId: curEl.uniqueId, productId: curEl.productId, itemCount: curEl.itemCount } })} />
              </div>
            ))}
        </div>
        <div className=' '>
          <div className=' p-2 text-center relative flex justify-between space-x-2 items-center w-full'>
            <div>
              <Button onClick={() => dispatch({ type: "CLEAR_CART" })}>Clear Cart</Button>
            </div>
            <div className='absolute top-1 right-8 bg-yellow-400'>
              <p className='text-lg'>Total Amount</p>
              <p className='font-bold'>&#8377;
                {cartProducts.reduce((sum, item) => {
                  return sum += +item.subTotal
                }, 0)}
              </p>
            </div>
          </div>
        </div>
      </div>
    </Container>
  ) : <Container>
    <div className='w-full flex flex-col justify-center items-center h-[calc(100vh-8rem)] space-y-3'>
      <div className='text-center font-extrabold text-xl'>There are no items in the cart</div>
      <NavLink to="/allproducts">
        <Button>Shop Now!</Button>
      </NavLink>
    </div>
  </Container>
}

export default Cart