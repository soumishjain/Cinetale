import React from 'react'
import MightLike from '../Mightlike/MightLike'
import Amazon from '../Amazon'
import Netflix from '../Netflix'
import Disney from '../Disney'
import Apple from '../Apple'

const Allottsections = () => {

  return (
    <div className='mt-10'>
        <MightLike name='Might Like'/>
        <Amazon name='Netflix'/>
        <Netflix name='Amazon'/>
        <Disney name='Apple'/>
        <Apple name='Jio Hotstar'/>
    </div>
  )
}

export default Allottsections
