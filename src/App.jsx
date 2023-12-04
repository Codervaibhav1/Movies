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
    <Route path='movie/:movieId' element={<Moviedetails/>}/>
  </Routes>
    </div>
    </Router>
  )
}

export default App