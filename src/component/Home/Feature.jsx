import React from 'react'
import { Container } from "../index"
import { useProductContext } from '../../context/ProductContext'

const Feature = () => {

    const { featuredProducts, isLoading } = useProductContext()
    console.log(featuredProducts)

    return isLoading ? <div>Loading...</div> :
        (
            <Container>
                <div className=' text-center'>
                    <p className='animate-pulse bg-gradient-to-r text-lg w-fit mx-auto text-transparent bg-clip-text p-2 rounded-md font- from-indigo-500 via-purple-500 to-pink-500'>Check Now!</p>
                    <h3 className='text-xl md:text-2xl'>Our Featured Products</h3>
                    <div className='flex flex-col md:flex md:flex-row items-center justify-center  '>
                        {featuredProducts.map((item) => (
                            <div key={item.id} className='mb-7 p-1 bg-green-300  shadow-xl'>
                               
                                <img src={item.image} alt={item.name} />
                                <div className='flex justify-between items-center p-1 font-bold'>
                                    <p>{item.name}</p>
                                    <p>{item.price}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            
    </Container >
  )
}

export default Feature