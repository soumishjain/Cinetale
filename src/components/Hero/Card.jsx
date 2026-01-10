import React from 'react'

const Card = () => {
  return (
    <div className="snap-start flex-shrink-0 border-2 border-white/40 bg-[url('https://i.pinimg.com/1200x/c3/21/4f/c3214fbd9b344572ea6616110df227f3.jpg')] bg-cover bg-center bg-black mt-8 w-full rounded-2xl text-white">
      <div className='w-[40%] px-6 flex flex-col justify-between p-4 gap-15'>
        <div className="top">
        <h4 className='bg-white/40 rounded-full w-fit px-3'>🔥Now Trending</h4>
      </div>
      <div className='flex flex-col gap-5'>
        <div className="mid flex flex-col gap-5">
          <div className='flex gap-3'>
            <h4 className='bg-white/40 rounded-full w-fit px-3'>Drama</h4>
            <h4 className='bg-white/40 rounded-full w-fit px-3'>Fantasy</h4>
          </div>
          <div>
            <h1 className='text-5xl font-medium'>Dimensional Kids on an Adventure</h1>
          </div>
          <div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, aperiam hic! Ad fugit, impedit hic vel et eos. Amet, eaque?</p>
          </div>
        </div>
        <div className="bot flex gap-5 mt-3">
          <button className='px-4 py-2 rounded-xl bg-purple-700'><i className="ri-play-large-fill"></i>Watch Now</button>
          <a href="" className='bg-white/50 rounded-xl text-xl p-2 flex justify-center items-center px-3'><i className="ri-download-2-line"></i></a>
          <a href="" className='bg-white/50 rounded-xl text-xl p-2 flex justify-center items-center px-3'><i className="ri-more-2-fill"></i></a>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Card
