import React from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom'
import MovieList from './pages/MovieList'
import Moviedetails from './pages/Moviedetails'
import SearchData from './components/SearchData'
import PopularData from './components/PopularData'
import TopData from './components/TopData'
import UpcomingData from './components/UpcomingData'
import useDarkMode from './components/DarkLight'
import ActionData from './components/ActionData'
import RomanceData from './components/RomanceData'
import HorrorData from './components/HorrorData'
import ComedyData from './components/ComedyData'
import DramaData from './components/DramaData'
import MistryData from './components/MistryData'
const App = () => {
  const {mode} = useDarkMode()
  return (
    <Router>
      <Navbar/>
    <div className= {`container ${mode === 'dark' ? 'text-light': 'text-dark'}`}>
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/movielist' element={<MovieList/>}/>
    <Route path='/searchpage' element={<SearchData/>}/>
    <Route path='/popular' element={<PopularData/>}/>
    <Route path='/toprated' element={<TopData/>}/>
    <Route path='/upcoming' element={<UpcomingData/>}/>
    <Route path='/actionpage' element={<ActionData/>}/>
    <Route path='/romance' element={<RomanceData/>}/>
    <Route path='/horrer' element={<HorrorData/>}/>
    <Route path='/comedy' element={<ComedyData/>}/>
    <Route path='/drama' element={<DramaData/>}/>
    <Route path='/mistry' element ={<MistryData/>}/>
    <Route path='movie/:movieId' element={<Moviedetails/>}/>
  </Routes>
    </div>
    </Router>
  )
}

export default App