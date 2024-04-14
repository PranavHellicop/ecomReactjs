import React from 'react'
import {Logo} from "../index"
import Navbar from './Navbar'

const Header = () => {
  return (
    <div className='flex justify-around items-center bg-teal-400 p-3 pr-5 pl-5 shadow-lg w-full h-14'>
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