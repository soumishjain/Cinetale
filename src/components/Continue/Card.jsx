import React from 'react'

const Card = () => {
  return (
    <div>
      <div className="text-white min-w-[280px] gap-2 flex flex-col justify-end snap-start h-[180px] p-4 rounded-xl  flex-shrink-0 bg-cover bg-center bg-[url('https://i.pinimg.com/1200x/52/68/d2/5268d25baa4acb1ef4afb4b7543cfd54.jpg')]">
        <h1 className='text-xl'>Midnight Mischief Squad</h1>
        <div className='flex justify-between'>
          <span className='border-white/40 border-1 bg-black/40 px-2 rounded-2xl text-xs flex justify-center items-center'>S1.Ep-3</span>
          <h5 className='px-2 rounded-2xl text-xs flex justify-center items-center'>30min 55sec</h5>
        </div>
        <div className='w-[100%] h-1 bg-white/70 rounded-2xl'>
          <div className='w-[40%] h-[100%] rounded-2xl bg-purple-700'></div>
        </div>
      </div>
    </div>
  )
}

export default Card
