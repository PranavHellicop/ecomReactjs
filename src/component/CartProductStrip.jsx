import React from 'react'

const CartProductStrip = ({productName,itemCount,price,imageUrl,subTotal}) => {
  return (
    <div className='w-full'>
        <div className='flex justify-between items-center my-2 bg-black text-white p-2 font-bold'>
          <div className='w-20'>
            <img src={imageUrl} alt="" />
          </div>
          <p>{productName}</p>
          <p>{itemCount}</p>
          <p>{itemCount}x{price} = &#8377; {subTotal}</p>
        </div>
       
    </div>
  )
}

export default CartProductStrip