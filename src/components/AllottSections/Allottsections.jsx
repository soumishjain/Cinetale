import React from 'react'
import MightLike from '../Mightlike/MightLike'
import Amazon from '../Amazon/Amazon'
import Netflix from '../Netflix/Netflix'
import Disney from '../Disney/Disney'
import Apple from '../Apple/Apple'

const Allottsections = () => {

  return (
    <div className='mt-10'>
        <MightLike name='Might Like'/>
        <Netflix name='Netflix'/>
        <Amazon name='Amazon'/>
        <Apple name='Apple'/>
        <Disney name='Jio Hotstar'/>
    </div>
  )
}

export default Allottsections
