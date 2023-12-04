import React from 'react'
import { Link } from 'react-router-dom';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import useDarkMode from './DarkLight';

const Tranding = ({tranding}) => {
    const imgUrl = 'https://image.tmdb.org/t/p/w500'
     const {mode} = useDarkMode()
    const calculateCircleRating = (rating) => {
      const roundedRating = Math.round(rating / 2); // Assuming rating is out of 10
      return (
        <div className="circle-rating">
          <span>{roundedRating}</span>
        </div>
      );
    };
  
  return (
    <div className="col">
    <div className="card shadow-sm text-decoration-none border border-none" id='card'>
      <img id='img-section' src={`${imgUrl+tranding.poster_path}`} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">{tranding.original_title}</h5>
                  <small className="text-body-secondary">Release Date :-{tranding.release_date}</small>
                  <p id='rating'>
        <CircularProgressbar
          value={tranding.vote_average * 10}
          text={`${tranding.vote_average}`}
          styles={buildStyles({
            textColor: mode === 'light' ? '#000' : '#000',
            pathColor: mode === 'light' ? 'green' : 'green',
            trailColor: mode === 'light' ? '#d6d6d6' : '#777',
          })}
        />
      </p>
      </div>
     <div className=' d-flex justify-content-center align-item-center'>
     <Link className='btn btn-dark mb-1 d-flex justify-content-center align-item-center text-decoration-none' to={`/movie/${tranding.id}`}>Overview</Link>
     </div>
    </div>  
    </div>  
  )
}
export default Tranding