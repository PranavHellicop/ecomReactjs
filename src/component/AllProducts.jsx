import React from 'react'
import { Container } from "./index"
import FilterProducts from "./FilterProducts"
import SortProducts from "./SortProducts"
import Products from  "./Products"

const AllProducts = () => {
  return (
    <Container>
      <div className='flex flex-row space-x-5'>
        <div >
          <FilterProducts />
        </div>
        <div>
          <div>
            <SortProducts />
          </div>
          <div className=''>
            <Products />
          </div>
        </div>
      </div>
    </Container>
  )
}

export default AllProducts