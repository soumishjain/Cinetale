import React from 'react'
import { useNavigate } from 'react-router-dom'

const Card = ({elem}) => {
    const navigate = useNavigate()
  return (
    <div onClick={() => navigate(`/genre/${elem.genre.toLowerCase()}`)} style={{backgroundImage: `url(${elem.poster})`}} className='sm:w-[280px] h-[180px] w-[150px] rounded-xl bg-center bg-cover cursor-pointer '>
      <div className="text-white bg-black/50 w-[100%] gap-2 flex justify-center items-center snap-start h-[100%] rounded-xl flex-shrink-0 hover:bg-black/70 transition-all duration-300 ease ">
      <h1 className='text-3xl uppercase font-medium'>{elem.genre}</h1>
      </div>
    </div>
  )
}

export default Card
