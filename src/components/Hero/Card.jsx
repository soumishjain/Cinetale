import React from 'react'
import { useNavigate } from 'react-router-dom'

const Card = ({elem}) => {
  const navigate = useNavigate()
  return (
    <div onClick={() => navigate(`/${elem.availableOn}/${elem.slug}`)} style={{backgroundImage:`url(${elem.poster})`}} className='snap-start border-2 border-white/40 cursor-pointer flex-shrink-0 bg-cover bg-center w-full rounded-2xl'>
    <div  className=" bg-black/50 w-[100%] h-[100%]  rounded-2xl text-white bg-cover bg-center">
      <div className='sm:w-[50%] px-6 flex flex-col justify-between pt-4 gap-15'>
        <div className="top">
        <h4 className='bg-white/40 rounded-full w-fit px-3 transition-all duration-300 ease hover:bg-black'>🔥{elem.status}</h4>
      </div>
      <div className='flex flex-col gap-25 sm:gap-15'>
        <div className="mid flex flex-col gap-3">
          <div className='flex gap-3'>
            <h4 onClick={(e) =>{ e.stopPropagation(), navigate(`/genre/${elem.genres[0].toLowerCase()}`)}} className='bg-white/40 rounded-full w-fit px-3 transition-all duration-300 ease hover:bg-black'>{elem.genres[0]}</h4>
            <h4 onClick={(e) =>{ e.stopPropagation(), navigate(`/genre/${elem.genres[1].toLowerCase()}`)}} className='bg-white/40 rounded-full w-fit px-3 transition-all duration-300 ease hover:bg-black'>{elem.genres[1]}</h4>
          </div>
          <div>
            <h1 className='text-5xl font-medium'>{elem.name}</h1>
          </div>
          <div className='hidden sm:block'>
            <p>{elem.description}</p>
          </div>
        </div>
        <div className="bot flex gap-5 mb-10">
          <a  href={elem.platform} target='_blank' className='p-4 sm:px-4 py-2 rounded-xl bg-purple-700 font-medium transition-all ease duration-300 hover:bg-black'><i className="ri-play-large-fill"></i>Watch Now</a>
          <a onClick={(e) => e.preventDefault()} href="" className='bg-white/50 hidden rounded-xl text-xl p-2 sm:flex justify-center items-center px-3 transition-all ease duration-300 hover:bg-black'><i className="ri-download-2-line"></i></a>
        </div>
      </div>
      </div>
    </div>
    </div>
  )
}

export default Card
