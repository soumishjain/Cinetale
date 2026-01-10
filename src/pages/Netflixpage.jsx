import React from 'react'
import Leftnav from '../components/Leftnav/Leftnav'
import Netflixfullpage from '../components/Netflixfullpage/Netflixfullpage'

const Netflixpage = () => {
  return (
     <div className='flex h-screen w-Screen bg-black/80 backdrop-blur-2xl'>
        <div className='w-[17%] p-4 pr-0'>
        <Leftnav />
        </div>

        <div className='w-[85%] h-[96%] mt-5 mb-5 overflow-y-auto noscrolbar'>
        <Netflixfullpage />
        </div>
    </div>
  )
}

export default Netflixpage
