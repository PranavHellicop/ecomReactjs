import React from 'react'
import { useFilterContext } from '../context/FilteredProduct'
import { Product } from './index'
import { NavLink } from 'react-router-dom'

const Products = () => {
  const { sortedProducts } = useFilterContext()

  return (
 
      <div className="md:flex md:flex-row md:flex-wrap items-center bg-yellow-400 p-3 space-x-5 md:w-full">
      {sortedProducts?.map((item) => (
        <NavLink to={`/singleproduct/${item.id}`} key={item.id} >

            <Product {...item} />
        </NavLink>
      ))}
      </div>
    
  )
}

export default Products