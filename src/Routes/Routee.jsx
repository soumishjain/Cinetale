import Allcomp from '../components/Allcomp'
import { Route, Routes } from 'react-router-dom'
import Explore from '../pages/Explore'
import Netflixpage from '../pages/Netflixpage'
import Amazonpage from '../pages/Amazonpage'
import Disneypage from '../pages/Disneypage'
import Applepage from '../pages/Applepage'
import Continuepage from '../pages/Continuepage'
import Favpage from '../pages/Favpage'
import Genrefullpage from '../components/Genrefullpage/Genrefullpage'
import GenreFullPageContent from '../components/Genrefullpage/GenreFullPageContent'
import Netflixfullpage from '../components/Netflixfullpage/Netflixfullpage'
import Detailpage from '../pages/Detailpage'
import Titledetailfullpage from '../components/Titledetailpage.jsx/Titledetailfullpage'

const Routee = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Allcomp />}></Route>
        <Route path='/explore' element={<Explore />}></Route>

        <Route path='/netflix' element={<Netflixpage />}></Route>
        <Route path='/netflix/:name' element={<Titledetailfullpage />}/>
        <Route path='/amazon' element={<Amazonpage />}></Route>
        <Route path='/amazon/:name' element={<Titledetailfullpage />}/>
        <Route path='/disney' element={<Disneypage />}></Route>
        <Route path='/disney/:name' element={<Titledetailfullpage />}/>
        <Route path='/apple' element={<Applepage />}></Route>
        <Route path='/apple/:name' element={<Titledetailfullpage />}/>
        <Route path='/continue' element={<Continuepage />}></Route>
        <Route path='/genre' element={<Genrefullpage />}>
        <Route path=':type' element={<Genrefullpage />} />
        </Route>
        <Route path='/fav' element={<Favpage />}></Route>
      </Routes>

    </div>
  )
}

export default Routee
