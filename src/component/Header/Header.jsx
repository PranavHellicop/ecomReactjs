import React from 'react'
import {Logo} from "../index"
import Navbar from './Navbar'

const Header = () => {
  return (
    <div className='flex justify-between items-center bg-teal-400 p-2 shadow-lg w-full h-16'>
      <div className=''>
          <Logo />
      </div>
      <div className=''> 
        
        <Navbar />
      </div>

    </div>
  )
}

export default Header