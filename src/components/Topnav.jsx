import React from 'react'

const Topnav = () => {
  return (
    <div className='flex justify-between items-center'>
      <div className="left border border-white/40 bg-black/15 text-white/40 p-2 flex justify-center items-center gap-2 px-4 rounded-lg w-90">
        <i className="ri-search-line"></i>
        <input className='w-100 outline-0 border-0' type="text" placeholder='Search for films, directors,or actrors...'/>
      </div>
      <div className="right flex gap-12 ">
        <i className="ri-notification-3-fill text-3xl text-white/50"></i>
        <img className='h-8 rounded-full' src="https://i.pinimg.com/736x/3c/ae/07/3cae079ca0b9e55ec6bfc1b358c9b1e2.jpg" alt="" />

      </div>
    </div>
  )
}

export default Topnav
