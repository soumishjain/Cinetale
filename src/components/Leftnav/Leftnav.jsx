import React from 'react'
import logo from '../../assets/FullLogo_Transparent_NoBuffer.png'
import { Link } from 'react-router-dom'
const Leftnav = () => {
  return (
    <div className='border-2 flex flex-col justify-between rounded-xl border-white/40 w-[100%] h-full bg-black/20 text-white/40 py-4 px-3'>
      <div className='flex flex-col gap-2'>
        <div className='flex gap-5 justify-center items-center mb-5'>
        <img className='object-center object-cover h-5' src={logo} alt="" />
        <i className="ri-menu-fold-line text-2xl"></i>
      </div>
      <div className='flex flex-col gap-3'>
        <div className="top border-b-2 pb-4">
          <Link className='flex justify-start items-center mb-1 gap-2' to="/"><i class="ri-home-5-line text-2xl"></i>Home</Link>
          <Link className='flex justify-start items-center mb-1  gap-2' to='/explore'><i class="ri-compass-3-line text-2xl"></i>Explore</Link>
          <Link className='flex justify-start mb-1  items-center gap-2' href=""><i class="ri-stack-line text-2xl"></i>Genres</Link>
          <Link className='flex justify-start mb-1  items-center gap-2' href=""><i class="ri-bookmark-line text-2xl"></i>Favrouites</Link>
        </div>
      <div className="mid  border-b-2 pb-4">
        <Link className='flex justify-start mb-1  items-center gap-2' to='/continue'> <i class="ri-play-large-fill text-2xl"></i>Continue Watching</Link>
        <Link className='flex justify-start mb-1  items-center gap-2' to='/netflix'><i class="ri-netflix-fill text-2xl"></i>Netflix</Link>
        <Link className='flex justify-start mb-1  items-center gap-2' to='/disney'><i class="ri-mickey-fill text-2xl"></i>Disney</Link>
        <Link className='flex justify-start mb-1  items-center gap-2' to='/amazon'><i class="ri-amazon-fill text-2xl"></i>Amazon</Link>
        <Link className='flex justify-start mb-1  items-center gap-2' to='/apple'><i class="ri-apple-line text-2xl"></i>Apple</Link>
      </div>
        <Link className="down flex justify-start mb-1  items-center gap-2"><i class="ri-settings-5-fill text-2xl"></i>Settings</Link>
      </div>
      </div>
      <div className='flex justify-start mb-1 mt-60  items-center gap-2'>
        <i className="ri-logout-box-r-line text-2xl"></i>
        <h4>Logout</h4>
      </div>
    </div>
  )
}

export default Leftnav
