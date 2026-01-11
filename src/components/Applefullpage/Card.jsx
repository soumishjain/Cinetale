import React from 'react'
import { useNavigate } from 'react-router'

const Card = ({elem}) => {
  const navigate = useNavigate()
  return (
    <div onClick={() => navigate(`/${elem.availableOn}/${elem.slug}`)} className='min-w-[280px] cursor-pointer text-white  flex flex-col gap-2 hover:text-red-600 transition-all ease duration-300'>
      <img className='w-full h-[380px] rounded-2xl object-center object-cover ' 
      src={elem.poster} alt="" />
        <div className=' pl-2'>
            <h3 className='text-xl font-medium'>{elem.name}</h3>
            <span className='text-xs drop-shadow-[0_0_5px_rgba(255,255,255,0.8)]'>{elem.type} : {elem.year}</span>
        </div>
    </div>
  )
}

export default Card
