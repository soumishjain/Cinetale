import React from 'react'
import Card from './Card'
import { useNavigate } from 'react-router-dom';
import { moreNetflixTitles } from '../../assets/data/netflixdata';

const Netflix = ({name}) => {
  
const navigate = useNavigate()
  return (
    <div className='mt-10'>
      <div className=" top flex justify-between text-white mb-5">
        <h1 className='text-3xl font-medium'>{name}</h1>
        <button onClick={() => navigate('/netflix')} className='bg-white/50 px-4 py-2 rounded-lg font-medium transition-all ease duration-300 hover:bg-black cursor-pointer'>See All</button>
      </div>
      <div className='overflow-x-auto flex-nowrap noscrolbar flex gap-5 snap-x snap-mandatory snap-smooth'>
        {moreNetflixTitles.map((elem,idx) => {
        return <Card elem={elem}/>
      })}
      </div>
      </div>
  )
}

export default Netflix
