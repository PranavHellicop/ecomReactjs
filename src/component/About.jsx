import React from 'react'
import {PostCard} from './index'
import {Container} from './index'
import {about} from "./data/data"

const About = () => {
  return (
    <Container>
      <div className='lg:mt-20 mt-5'>
      <PostCard {...about} />

      </div>
    </Container>
  )
}

export default About