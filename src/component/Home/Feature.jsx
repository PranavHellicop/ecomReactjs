import React from 'react'
import { Container, Product } from "../index"
import { useProductContext } from '../../context/ProductContext'
import { NavLink } from 'react-router-dom'

const Feature = () => {

    const { featuredProducts, isLoading } = useProductContext()


    return isLoading ? <div>Loading...</div> :
        (
            <Container>
                <div className=' text-center'>
                    <p className='animate-pulse bg-gradient-to-r text-xl w-fit mx-auto text-transparent bg-clip-text p-2 rounded-md from-indigo-500 via-purple-500 to-pink-500'>Check out Now!</p>
                    <h3 className='text-xl md:text-2xl'>Our Featured Products</h3>
                    <div className='flex flex-col md:flex md:flex-row items-center justify-center md:space-x-5 space-y-3 md:space-y-1 p-2'>

                        {featuredProducts.map((item,index) => (
                            <NavLink to={`singleproduct/${item.id}`} key={index}>
                                <Product {...item} />
                            </NavLink>
                        ))}
                            </div>

                </div>

            </Container >
        )
}

export default Feature