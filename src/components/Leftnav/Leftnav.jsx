import React from 'react'
import logo from '../../assets/FullLogo_Transparent_NoBuffer.png'
import { NavLink } from 'react-router-dom'
const Leftnav = () => {
  const navBase = 'flex justify-start items-center mb-1 gap-2 text-white/40';
  const navActive = 'text-red-700 font-medium underline'
  return (
    <div className='border-2 flex flex-col justify-between rounded-xl border-white/40 w-[100%] h-full bg-black/20  py-4 px-3'>
      <div className='flex flex-col gap-2'>
        <div className='flex justify-between items-center mb-5'>
        <img className='object-center object-cover h-5' src={logo} alt="" />
        <i className="ri-menu-fold-line text-white/40 text-2xl"></i>
      </div>
      <div className='flex flex-col gap-3'>
        <div className="top border-white/40 border-b-2 pb-4">
          <NavLink to="/" end className={({isActive}) => `${navBase} ${isActive ? navActive : ""}`}><i class="ri-home-5-line text-2xl"></i>Home</NavLink>
          <NavLink className={({isActive}) => `${navBase} ${isActive ? navActive : ""}`} to='/explore'><i className="ri-compass-3-line text-2xl"></i>Explore</NavLink>
          <NavLink className={({isActive}) => `${navBase} ${isActive ? navActive : ""}`} to='/genre'><i className="ri-stack-line text-2xl"></i>Genres</NavLink>
          <NavLink to='/fav' end className={({isActive}) => `${navBase} ${isActive ? navActive : ""}`} href=""><i className="ri-bookmark-line text-2xl"></i>Favrouites</NavLink>
        </div>
      <div className="mid border-white/40 border-b-2 pb-4">
        <NavLink className={({isActive}) => `${navBase} ${isActive ? navActive : ""}`} to='/continue'> <i className="ri-play-large-fill text-2xl"></i>Continue Watching</NavLink>
        <NavLink className={({isActive}) => `${navBase} ${isActive ? navActive : ""}`} to='/netflix'><i className="ri-netflix-fill text-2xl"></i>Netflix</NavLink>
        <NavLink className={({isActive}) => `${navBase} ${isActive ? navActive : ""}`} to='/disney'><i className="ri-mickey-fill text-2xl"></i>Disney</NavLink>
        <NavLink className={({isActive}) => `${navBase} ${isActive ? navActive : ""}`} to='/amazon'><i className="ri-amazon-fill text-2xl"></i>Amazon</NavLink>
        <NavLink className={({isActive}) => `${navBase} ${isActive ? navActive : ""}`} to='/apple'><i className="ri-apple-line text-2xl"></i>Apple</NavLink>
      </div>
        <NavLink className="down flex justify-start mb-1 text-white/40 items-center gap-2"><i class="ri-settings-5-fill text-2xl"></i>Settings</NavLink>
      </div>
      </div>
      <div className='flex justify-start mb-1 mt-60 text-white/40 items-center gap-2'>
        <i className="ri-logout-box-r-line text-2xl"></i>
        <h4>Logout</h4>
      </div>
    </div>
  )
}

export default Leftnav
