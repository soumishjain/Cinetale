import React from 'react'
import Netflixfullpage from '../components/Netflixfullpage/Netflixfullpage'
import { Outlet } from 'react-router-dom'
import Titledetailfullpage from '../components/Titledetailpage.jsx/Titledetailfullpage'

const Detailpage = () => {
  return (
    <div className='flex h-screen w-Screen bg-black/80 backdrop-blur-2xl'>
        <div className='w-[100%] overflow-hidden mt-5 mb-5'>
        <Titledetailfullpage />
        <Outlet />
        </div>
    </div>
  )
}

export default Detailpage
