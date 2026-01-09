import React from 'react'
import logo from '../assets/Moctale-logo-HQ.svg'
const Leftnav = () => {
  return (
    <div className='border-2 flex flex-col justify-between rounded-xl border-white/40 w-1/7 bg-black/10 h-full text-white/40 py-4 px-3'>
      <div className='flex flex-col gap-2'>
        <div className='flex gap-5 justify-center items-center'>
        <img className='object-center object-cover h-5' src={logo} alt="" />
        <i className="ri-menu-fold-line text-2xl"></i>
      </div>
      <div className='flex flex-col gap-3'>
        <div className="top border-b-2 pb-4">
          <div className='flex justify-start items-center mb-1 gap-2'>
            <i class="ri-home-5-line text-2xl"></i>
          <a href="">Home</a>
          </div>
          <div className='flex justify-start items-center mb-1  gap-2'>
            <i class="ri-compass-3-line text-2xl"></i>
          <a href="">Explore</a>
          </div>
          <div className='flex justify-start mb-1  items-center gap-2'>
            <i class="ri-stack-line text-2xl"></i>
          <a href="">Genres</a>
          </div>
          <div className='flex justify-start mb-1  items-center gap-2'>
            <i class="ri-bookmark-line text-2xl"></i>
          <a href="">Favrouites</a>
          </div>
        </div>
      <div className="mid  border-b-2 pb-4">
        <div className='flex justify-start mb-1  items-center gap-2'>
          <i class="ri-play-large-fill text-2xl"></i>
        <a href="">Continue Watching</a>
        </div>
        <div className='flex justify-start mb-1  items-center gap-2'>
          <i class="ri-netflix-fill text-2xl"></i>
        <a href="">Netflix</a>
        </div>
        <div className='flex justify-start mb-1  items-center gap-2'>
          <i class="ri-mickey-fill text-2xl"></i>
        <a href="">Disney</a>
        </div>
        <div className='flex justify-start mb-1  items-center gap-2'>
          <i class="ri-amazon-fill text-2xl"></i>
        <a href="">Amazon</a>
        </div>
        <div className='flex justify-start mb-1  items-center gap-2'>
          <i class="ri-apple-line text-2xl"></i>
        <a href="">Apple</a>
        </div>
      </div>
      <div className="down flex justify-start mb-1  items-center gap-2">
        <i class="ri-settings-5-fill text-2xl"></i>
        <a href="">Settings</a>
      </div>
      </div>
      </div>
      <div className='flex justify-start mb-1  items-center gap-2'>
        <i className="ri-logout-box-r-line text-2xl"></i>
        <h4>Logout</h4>
      </div>
    </div>
  )
}

export default Leftnav
