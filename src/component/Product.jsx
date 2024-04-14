import React from 'react'
import { Container } from "./index"
import { NavLink } from 'react-router-dom'

const Product = ({  image, name, price }) => {

  return (
  
        <div className=' p-1 bg-green-300 shadow-xl flex flex-col md:w-80 hover:transition-transform hover:scale-105 duration-500 ease-in-out'>
          <div className=''>
            <img src={image} alt={name} />
          </div>
          <div className='flex justify-between items-center pl-1 font-bold'>
            <p>{name}</p>
            <p>&#8377;{price}</p>
          </div>
        </div>
  
 
  )
}

export default Product