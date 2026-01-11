import React from 'react'

const Card = ({elem}) => {
  return (
    <div className='snap-start cursor-pointer  min-w-[250px] flex flex-col text-white gap-2 hover:text-red-600 transition-all ease duration-300'>
      <img className='rounded-2xl object-center flex-shrink-0 object-cover ' 
      src={elem.poster} alt="" />
        <div className=' pl-2'>
            <h3 className='text-xl font-medium'>{elem.name}</h3>
            <span className='text-xs drop-shadow-[0_0_5px_rgba(255,255,255,0.8)]'>{elem.type} : {elem.year}</span>
        </div>
    </div>
  )
}

export default Card
