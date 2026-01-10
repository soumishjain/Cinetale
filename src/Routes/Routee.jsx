import React from 'react'
import Allcomp from '../components/Allcomp'
import { Route, Routes } from 'react-router-dom'
import Explore from '../pages/Explore'
import Netflixpage from '../pages/Netflixpage'
import Amazonpage from '../pages/Amazonpage'
import Disneypage from '../pages/Disneypage'
import Applepage from '../pages/Applepage'
import Continuepage from '../pages/Continuepage'

const Routee = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Allcomp />}></Route>
        <Route path='/explore' element={<Explore />}></Route>
        <Route path='/netflix' element={<Netflixpage />}></Route>
        <Route path='/amazon' element={<Amazonpage />}></Route>
        <Route path='/disney' element={<Disneypage />}></Route>
        <Route path='/apple' element={<Applepage />}></Route>
        <Route path='/continue' element={<Continuepage />}></Route>
      </Routes>
    </div>
  )
}

export default Routee
