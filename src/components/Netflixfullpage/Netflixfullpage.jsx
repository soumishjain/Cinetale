import React from 'react'
import Card from './Card';
import { useParams } from 'react-router-dom';
import { moreNetflixTitles } from '../../assets/data/netflixdata';
const Netflixfullpage = () => {

  const {name} = useParams()
  
  return (
    <>
      {
        !name && (
          <>
            <div className='flex flex-col pl-5 overflow-y-auto'>
        <h2 className='text-white font-medium text-3xl'>NETFLIX</h2>
        <div className='flex flex-wrap gap-5 mt-5'>
            {moreNetflixTitles.map((elem,idx) => {
                return <Card elem={elem} />
            })}
        </div>
    </div>
          </>
        )
      }
    </>
    
  )
}

export default Netflixfullpage
