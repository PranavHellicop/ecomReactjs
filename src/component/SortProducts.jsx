import React, { useEffect } from 'react'
import { useFilterContext } from '../context/FilteredProduct'

const SortProducts = () => {
  const {sorting,sortedProducts} = useFilterContext()

  return (
    <div className='flex justify-between items-center'>
      <div>
        <p>{sortedProducts.length} products available</p>
      </div>
      <div>
      <h4>Sort Products</h4>
      <select name="sort" id="sort" onClick={sorting}>
        <option value="ascending">ascending</option>
        <option value="descending">descending</option>
        <option value="alphabetical">a-z</option>
        <option value="revalphabetical">z-a</option>
      </select>
      </div>
    </div>
  )
}

export default SortProducts