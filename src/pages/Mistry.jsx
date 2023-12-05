import React from 'react'
import { Link } from 'react-router-dom'

const Mistry = ({mistry}) => {
    const imgUrl = 'https://image.tmdb.org/t/p/w500'
  return (
    <div className="col">
    <div className="card shadow-sm text-decoration-none border border-none" id='card'>
      <img id='img-section' src={`${imgUrl+mistry.poster_path}`} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">{mistry.original_title}</h5>
                  <small className="text-body-secondary">Release Date :-{mistry.release_date}</small>
      </div>
     <div className=' d-flex justify-content-center align-item-center'>
     <Link className='btn btn-dark mb-1 d-flex justify-content-center align-item-center text-decoration-none' to={`/movie/${mistry.id}`}>Overview</Link>
     </div>
    </div>  
    </div> 
  )
}

export default Mistry