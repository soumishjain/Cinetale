import React from 'react'
import Card from './Card'
import { useNavigate } from 'react-router';
import { moreAmazonTitles } from '../../assets/data/amazondata';

const Amazon = ({name}) => {

const navigate = useNavigate();
  return (
    <div className='mt-10'>
      <div className=" top flex justify-between text-white mb-5">
        <h1 className='text-3xl font-medium'>{name}</h1>
        <button onClick={() => navigate('/amazon')} className='bg-white/50 sm:px-4 px-2 sm:py-2 rounded-lg font-medium transition-all ease duration-300 hover:bg-black cursor-pointer'>See All</button>
      </div>
      <div className='overflow-x-auto flex-nowrap noscrolbar flex gap-5 snap-x snap-mandatory snap-smooth'>
        {moreAmazonTitles.map((elem,idx) => {
          return <Card elem={elem}/>
        })}
      </div>
      </div>
  )
}

export default Amazon
