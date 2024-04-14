import React from 'react'
import { Button } from "./index"
import { NavLink } from 'react-router-dom'


const PostCard = ({ heading, para, image }) => {
  return (
    <div className='lg:flex rounded-md text-white lg:flex-row bg-green-900  flex flex-col-reverse lg:space-x-2 justify-center items-center lg:shadow-none shadow-lg'>
      <div className='flex flex-col lg:w-1/2 justify-center items-center p-3 space-y-3'>
        <h2 className='text-2xl text-center lg:text-3xl'>{heading}</h2>
        <p className='text-center lg:text-wrap'>{para}</p>
        <NavLink to="/allproducts">

          <Button>Shop now</Button>
        </NavLink>
      </div>
      <div className='lg:w-1/2 w-full'>
        <img src={image} alt="" className='lg w-full rounded-lg' />
      </div>

    </div>
  )
}

export default PostCard