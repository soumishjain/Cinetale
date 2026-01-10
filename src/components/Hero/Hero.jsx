import React from 'react'
import Card from './Card'

const Hero = () => {
  return (
    <div className='noscrolbar flex flex-nowrap overflow-x-auto gap-10 snap-x snap-mandatory scroll-smoodh'>
      <Card />
      <Card />
      <Card />
    </div>
  )
}

export default Hero
