import React from 'react'

const Card = () => {
  return (
    <div className='snap-start min-w-[250px] flex flex-col gap-2'>
      <img className='rounded-2xl object-center flex-shrink-0 object-cover ' 
      src="https://i.pinimg.com/1200x/49/86/6e/49866e4acc34b72bbd9cb7b59e370466.jpg" alt="" />
        <div className='text-white pl-2'>
            <h3 className='text-xl font-medium'>Oldboy</h3>
            <span className='text-xs drop-shadow-[0_0_5px_rgba(255,255,255,0.8)]'>Movie : 2002</span>
        </div>
    </div>
  )
}

export default Card
