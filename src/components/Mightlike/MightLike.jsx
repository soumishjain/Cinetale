import React from 'react'
import Card from './Card'
import { useNavigate } from 'react-router-dom';
import { moreMightLikeTitles } from '../../assets/data/exploredata';

const MightLike = ({name}) => {
  
const navigate = useNavigate();
  return (
    <div>
      <div className=" top flex justify-between text-white mb-5">
        <h1 className='text-3xl font-medium'>{name}</h1>
        <button onClick={() => navigate('/explore')} className='bg-white/50 px-4 py-2 rounded-lg cursor-pointer font-medium transition-all ease duration-300 hover:bg-black'>See All</button>
      </div>
      <div className='overflow-x-auto flex-nowrap noscrolbar flex gap-5 snap-x snap-mandatory snap-smooth'>
        {moreMightLikeTitles.map((elem,idx) => {
          return <Card elem={elem}/>
        })}
      </div>
    </div>
  )
}

export default MightLike