import React from 'react'
import { useNavigate } from 'react-router'

const Card = ({elem}) => {
  return (
    <div style={{backgroundImage:`url(${elem.poster})`}} className="snap-start cursor-pointer flex-shrink-0 border-2 border-white/40 bg-cover bg-center bg-black mt-8 w-full rounded-2xl text-white">
      <div className='w-[50%] px-6 flex flex-col justify-between pt-4 gap-15'>
        <div className="top">
        <h4 className='bg-white/40 rounded-full w-fit px-3'>🔥{elem.status}</h4>
      </div>
      <div className='flex flex-col gap-5'>
        <div className="mid flex flex-col gap-5">
          <div className='flex gap-3'>
            <h4 className='bg-white/40 rounded-full w-fit px-3'>{elem.genres[0]}</h4>
            <h4 className='bg-white/40 rounded-full w-fit px-3'>{elem.genres[1]}</h4>
          </div>
          <div>
            <h1 className='text-5xl font-medium'>{elem.title}</h1>
          </div>
          <div>
            <p>{elem.description}</p>
          </div>
        </div>
        <div className="bot flex gap-5 mb-10">
          <a  href={elem.platform} target='_blank' className='px-4 py-2 rounded-xl bg-purple-700 font-medium transition-all ease duration-300 hover:bg-black'><i className="ri-play-large-fill"></i>Watch Now</a>
          <a  href="" className='bg-white/50 rounded-xl text-xl p-2 flex justify-center items-center px-3 transition-all ease duration-300 hover:bg-black'><i className="ri-download-2-line"></i></a>
          <a  href="" className='bg-white/50 rounded-xl text-xl p-2 flex justify-center items-center px-3 transition-all ease duration-300 hover:bg-black'><i className="ri-more-2-fill"></i></a>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Card
