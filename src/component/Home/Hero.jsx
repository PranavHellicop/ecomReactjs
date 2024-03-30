import React from 'react'
import {PostCard} from '../index'
import {Container} from '../index'
import {hero} from "../data/data"

const Hero = () => {
  return (
    <Container>
        <PostCard {...hero}/>
    </Container>
  )
}

export default Hero