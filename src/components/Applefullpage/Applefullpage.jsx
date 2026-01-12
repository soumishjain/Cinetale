import React from 'react'
import Card from './Card';
import { moreappleTitles } from '../../assets/data/appledata';

const Applefullpage = () => {

  return (
    <div className='flex flex-col sm:pl-5 overflow-y-auto'>
        <h2 className='text-white font-medium  text-3xl'>APPLE TV+</h2>
        <div className='flex flex-wrap gap-5 mt-5 mb-5'>
            {moreappleTitles.map((elem,idx) => {
                return <Card elem={elem} />
            })}
        </div>
    </div>
  )
}

export default Applefullpage
