import React from 'react'
import Leftnav from '../components/Leftnav/Leftnav'
import Amazonfullpage from '../components/Amazonfullpage/Amazonfullpage'

const Amazonpage = () => {
  return (
     <div className='flex h-screen w-Screen overflow-hidden bg-black/80 backdrop-blur-2xl'>
        <div className='w-[17%] p-4 pr-0'>
        <Leftnav />
        </div>

        <div className='w-[85%] mt-5 overflow-y-auto h-[96%] noscrolbar'>
        <Amazonfullpage />
        </div>
        </div>
  )
}

export default Amazonpage
