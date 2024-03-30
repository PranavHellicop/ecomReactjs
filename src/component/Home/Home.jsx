import React from 'react'
import Hero from './Hero'
import Services from './Services'
import Trusted from '../Trusted'
import Feature from './Feature'



const Home = () => {
  


  return (
    <div className='lg:mt-20 mt-5'>
      <Hero  />
      <Feature />
      <Services />
      <Trusted />
    </div>
  )
}

export default Home