import React from 'react'
import Disneyfullpage from '../components/Disneyfullpage/Disneyfullpage'
import Leftnav from '../components/Leftnav/Leftnav'

const Disneypage = () => {
  return (
     <div className='flex h-screen w-Screen overflow-hidden bg-black/80 backdrop-blur-2xl'>
        <div className='w-[17%] p-4 pr-0'>
        <Leftnav />
        </div>

        <div className='w-[85%] mt-5 overflow-y-auto h-[96%] noscrolbar'>
        <Disneyfullpage />
        </div>
        </div>
  )
}

export default Disneypage
