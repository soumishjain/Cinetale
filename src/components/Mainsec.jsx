import React from 'react'
import Topnav from './Topnav/Topnav'
import Hero from './Hero/Hero'
import Continue from './Continue/Continue'
import MightLike from './Mightlike/MightLike'
import Netflix from './Netflix'
import Disney from './Disney'
import Amazon from './Amazon'
import Apple from './Apple'
import Allottsections from './AllottSections/Allottsections'

const Mainsec = () => {
  return (
    <div className='px-10 w-full h-screen overflow-y-auto noscrolbar pr-8'>
      <Hero />
      <Continue />
      <Allottsections />
    </div>
  )
}

export default Mainsec
