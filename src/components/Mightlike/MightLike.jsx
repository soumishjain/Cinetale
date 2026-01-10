import React from 'react'
import Card from './Card'

const MightLike = ({name}) => {
  return (
    <div>
      <div className=" top flex justify-between text-white mb-5">
        <h1 className='text-2xl'>{name}</h1>
        <button className='bg-white/50 px-4 py-2 rounded-lg font-medium'>See All</button>
      </div>
      <div className='overflow-x-auto flex-nowrap noscrolbar flex gap-5 snap-x snap-mandatory snap-smooth'>
        <Card />
        <Card />
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

export default MightLike