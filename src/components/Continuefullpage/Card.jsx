import React from 'react'

const Card = ({elem}) => {
  return (
    <div>
      <div style={{backgroundImage:`url(${elem.poster})`}}  className="text-white cursor-pointer  min-w-[280px] gap-2 flex flex-col justify-end snap-start h-[180px] p-4 rounded-xl  flex-shrink-0 bg-cover bg-top ">
        <h1 className='text-xl'>{elem.name}</h1>
        <div className='flex justify-between'>
          <span className='border-white/40 border-1 bg-black/40 px-2 rounded-2xl text-xs flex justify-center items-center'>S{elem.season}.E{elem.episode}</span>
          <h5 className='px-2 rounded-2xl text-xs flex justify-center items-center'>{elem.timeCompleted}</h5>
        </div>
        <div className='w-[100%] h-1 bg-white/70 rounded-2xl'>
          <div style={{width:`${elem.percentCompleted}%`}} className='h-[100%] rounded-2xl bg-purple-700'></div>
        </div>
      </div>
    </div>
  )
}

export default Card
