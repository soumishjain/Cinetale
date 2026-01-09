import React from 'react'
import Topnav from './Topnav'
import Hero from './Hero'
import Continue from './Continue'
import MightLike from './MightLike'
import Netflix from './Netflix'
import Disney from './Disney'
import Amazon from './Amazon'
import Apple from './Apple'

const Mainsec = () => {
  return (
    <div className='w-6/7 px-5 pr-8 py-2'>
      <Topnav />
      <Hero />
      <Continue />
      <MightLike />
      <Netflix />
      <Disney />
      <Amazon />
      <Apple />
    </div>
  )
}

export default Mainsec
