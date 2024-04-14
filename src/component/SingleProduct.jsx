import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useProductContext } from '../context/ProductContext'
import { Container, Button } from "./index"
import { FaShippingFast } from "../icons/icons"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useCartContext } from '../context/CartContext'



const SingleProduct = () => {
  const [index, setIndex] = useState(0)
  const [showMessage, setShowMessage] = useState(false)

  const { id } = useParams()
  const { getSingleProduct, isSingleLoading, singleProduct } = useProductContext()
  const { itemNumber, dispatch, restoreItem,cartProducts } = useCartContext()

  useEffect(() => {

  })

  const generateUniqueId = () => {
    // Generate a random number and concatenate it with the current timestamp
    return Math.random().toString(36).substring(7) + Date.now().toString(36);
  };

  const API_URL = `https://api.pujakaitem.com/api/products?id=${id}`

  useEffect(() => {
    getSingleProduct(API_URL)
    restoreItem()
  }, [])

  useEffect(()=>{
    const messageSubs = setTimeout(() => {
      setShowMessage(false)
    }, 1500)
    return ()=>clearTimeout(messageSubs)
  },[cartProducts.length])


  const handleAddtoCart = () => {
    const uniqueId = generateUniqueId()
    dispatch({ type: "ADD_TO_CART", payload: { ...singleProduct, itemNumber, uniqueId } })
    setShowMessage(true)
   
  }




  return isSingleLoading ? <div>Loading...</div> :
    (
      <Container>
        <div className='flex flex-col justify-center items-center space-y-4 relative'>
          <h2 className='text-2xl font-bold w-full text-center bg-green-300'>{singleProduct?.name}</h2>
          <div className='flex flex-col md:flex md:flex-row space-y-4 justify-center'>
            {singleProduct.image &&
              <div className=''>
                <img src={singleProduct?.image[index]?.url} alt="" />
              </div>
            }
            <div className='flex md:flex md:flex-col space-x-1 justify-center w-full'>
              {singleProduct?.image?.map((item, index) => (
                <div key={item.id} className='cursor-pointer' onClick={() => setIndex(index)}>
                  <img src={item.url} alt="" className="h-16" />
                </div>
              ))}
            </div>
            <div className='flex flex-col space-y-4'>
              <p className='w-full text-center font-bold text-2xl '>&#8377;{singleProduct.price} </p>
              <p><span className='font-bold'>Maker: </span>{singleProduct.company}</p>
              <p><span className='font-bold' >Description: </span>{singleProduct?.description}</p>
              <div className='flex space-x-2 items-center'>
                <p className='font-bold' >Available colors: </p>
                <div className='flex space-x-2'>
                  {singleProduct.colors &&
                    singleProduct.colors?.map((item) => (
                      <div className="w-5 h-5 border border-black" style={{ backgroundColor: `${item}` }} key={item}></div>
                    ))}
                </div>
              </div>
              <div className='flex  items-center space-x-2'>
                <div className='flex flex-col justify-center items-center'>

                  <FaShippingFast className='text-4xl' />
                  <p className='font-bold'>Shipping</p>

                </div>
                {singleProduct.shipping ?
                  <p>Available</p> : <p>Not available</p>
                }
              </div>
              <div className='flex  items-center space-x-2'>
                {Number(singleProduct.stock) > 0 ?
                  <p ><span className='font-bold'>In Stock:</span> only <span className='font-bold'>{singleProduct.stock}</span> left
                  </p> : <p>out of stock</p>}
              </div>
              <div className='flex  items-center space-x-2'>
                {Number(singleProduct.reviews) > 0 ?
                  <p>{singleProduct.reviews} reviews
                  </p> : ""}
              </div>
            </div>
          </div>
          <div className='flex space-x-2'>
            <button className='p-1 w-7 h-7 text-center  bg-green-500' onClick={() => dispatch({ type: "INCREASE_ITEM", payload: singleProduct.stock })}>+</button>
            <p>{itemNumber}</p>
            <button className='p-1 w-7 h-7 text-center  bg-green-500' onClick={() => dispatch({ type: "DECREASE_ITEM" })}>-</button>
          </div>
          <div>
            <Button onClick={handleAddtoCart}>Add to Cart</Button>
          </div>
         {showMessage &&
            <div class="p-2 w-72 text-center mb-4 text-white rounded-lg bg-green-50 absolute -top-14 right-28 animate-success-message dark:bg-green-800 dark:text-white " role="alert">
              <span class="font-medium">Item successfully added to cart!</span>
            </div>
}
        </div>
      </Container>
    )
}

export default SingleProduct