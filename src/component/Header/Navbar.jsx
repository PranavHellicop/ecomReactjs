import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import {Button} from "../index"
const Navbar = () => {

  const [showMenu, setShowMenu] = useState(false)

  const navItems = [
    {
      id: 1,
      itemName: "Home",
      to: "/"
    },
    {
      id: 2,
      itemName: "About",
      to: "/about"
    },
    {
      id: 3,
      itemName: "Contact",
      to: "/contact"
    },
    {
      id: 4,
      itemName: "Products",
      to: "/products"
    },
  ]
  return (
    <div>
      <div className='md:hidden'>

        <button className='text-3xl  font-extrabold' onClick={() => setShowMenu(!showMenu)}>
          &#9776;
        </button>
        {showMenu &&
          <ul className='absolute top-16 w-full bg-black left-0 min-h-[calc(100vh-4rem)] flex flex-col items-center justify-center space-y-5 animate-nav-menu origin-top' onClick={() => setShowMenu(false)}>
            {navItems.map((item) => (
              <NavLink key={item.id} to={item.to} className="text-3xl  pb-5 w-2/3">
                <li className='text-center bg-green-100 p-1 rounded-lg'>{item.itemName}</li>
              </NavLink>
            ))}
            <li><Button>Signup</Button></li>
          <li><Button>Login</Button></li>
          </ul>
        }
      </div>

      {/* larger screen */}
      <div className='hidden md:block' >
        <ul className='flex items-center space-x-7'>
          {navItems.map((item) => (
            <NavLink key={item.id} to={item.to} className="text-lg font-semibold hover:bg-green-600 p-1 hover:text-white rounded-md ">
              <li>{item.itemName}</li>
            </NavLink>
          ))}
          <li><Button>Signup</Button></li>
          <li><Button>Login</Button></li>
        </ul>
      </div>

    </div>
  )
}

export default Navbar