import React from 'react'
import Card from './Card';
import { moreDisneyTitles } from '../../assets/data/hotstardata';
const Disneyfullpage = () => {

  return (
    <div className='flex flex-col pl-5 overflow-y-auto'>
        <h2 className='text-white font-medium  text-3xl'>JIO HOTSTAR</h2>
        <div className='flex flex-wrap gap-5 mt-5 mb-5'>
            {moreDisneyTitles.map((elem,idx) => {
                return <Card elem={elem} />
            })}
        </div>
    </div>
  )
}

export default Disneyfullpage
