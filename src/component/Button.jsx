import React from 'react'

const Button = ({
  children,
  ...props
}) => {
  return (
    <button className='w-28 p-2 bg-green-600 rounded-lg text-white hover:bg-green-700 hover:scale-105 hover:transition-transform duration-500 ease-in-out' {...props}>
        {children}
    </button>
  )
}

export default Button