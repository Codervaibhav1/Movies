import React from 'react'
import { Link } from 'react-router-dom'

const Upcoming = ({upcoming}) => {
  const imgUrl = 'https://image.tmdb.org/t/p/w500'
  return (
    <div class="col">
    <div class="card shadow-sm text-decoration-none border border-none" id='card'>
      <img id='img-section' src={`${imgUrl+upcoming?.poster_path}`} class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">{upcoming?.original_title}</h5>
                  <small class="text-body-secondary">Release Date :-{upcoming?.release_date}</small>
      </div>
     <div className=' d-flex justify-content-center align-item-center'>
     <Link className='btn btn-dark mb-1 d-flex justify-content-center align-item-center text-decoration-none' to={`/movie/${upcoming?.id}`}>Overview</Link>
     </div>
    </div>  
    </div> 
  )
}

export default Upcoming