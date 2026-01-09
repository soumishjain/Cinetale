import React from 'react'
import Leftnav from './Leftnav'
import Mainsec from './Mainsec'


const Allcomp = () => {
  return (
    <div className='w-screen p-4 h-screen flex gap-5 bg-black/80 backdrop-blur-2xl'>
      <Leftnav />
      <Mainsec />
    </div>
  )
}

export default Allcomp
