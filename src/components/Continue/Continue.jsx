import React from 'react'
import Card from '../Continue/Card'

const Continue = () => {
  return (
    <div className='mt-10'>
      <div className="top flex justify-between text-white mb-5">
        <h1 className='text-2xl'>Continue Watching</h1>
        <button className='bg-white/50 px-4 py-2 rounded-lg font-medium'>See All</button>
      </div>
      <div className='flex gap-3 flex-nowrap scroll-smooth snap-mandatory snap-x overflow-x-auto noscrolbar'>
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      </div>
    </div>
  )
}

export default Continue
