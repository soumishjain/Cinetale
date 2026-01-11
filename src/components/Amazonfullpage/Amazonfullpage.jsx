import React from 'react'
import Card from './Card';
import { moreAmazonTitles } from '../../assets/data/amazondata';

const Amazonfullpage = () => {
  return (
    <div className='flex flex-col pl-5 overflow-y-auto'>
        <h2 className='text-white font-medium  text-3xl'>AMAZON PRIME</h2>
        <div className='flex flex-wrap gap-5 mt-5 mb-5'>
            {moreAmazonTitles.map((elem,idx) => {
                return <Card elem={elem} />
            })}
        </div>
    </div>
  )
}

export default Amazonfullpage
