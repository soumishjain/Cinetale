import React from 'react'
import Leftnav from './Leftnav/Leftnav'
import Mainsec from './Mainsec'
import Topnav from './Topnav/Topnav'


const Allcomp = () => {
  return (
    <div className='w-Screen flex bg-black/80 backdrop-blur-2xl'>
      <div className='p-4 pr-0'>
           <Leftnav />
      </div>
      <div className='flex flex-col p-4 gap-3 w-[85%] h-screen'>
        <Topnav />
        <Mainsec />
      </div>
    </div>
  )
}

export default Allcomp
