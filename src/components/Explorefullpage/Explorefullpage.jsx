import React from 'react'
import Card from './Card';
import { moreMightLikeTitles } from '../../assets/data/exploredata';
const Explorefullpage = () => {


  return (
    <div className='flex flex-col pl-5 overflow-y-auto'>
        <h2 className='text-white font-medium text-3xl'>You Might Like</h2>
        <div className='flex flex-wrap gap-5 mt-5'>
            {moreMightLikeTitles.map((elem,idx) => {
                return <Card elem={elem} />
            })}
        </div>
    </div>
  )
}

export default Explorefullpage
