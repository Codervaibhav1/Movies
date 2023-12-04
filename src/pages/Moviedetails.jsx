import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getVideo, getmovieData } from '../features/slice/trandingSlice';
import useDarkMode from '../components/DarkLight';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import VideoPlay from '../components/VideoPlay';

const Moviedetails = () => {
  const { movieId } = useParams();
  const dispatch = useDispatch();
  const { mode } = useDarkMode();
  const { movieDetails, isLoading, isError , videoData } = useSelector((state) => state.tranding);
  const imgUrl = 'https://image.tmdb.org/t/p/w500'
  useEffect(() => {
    dispatch(getmovieData(movieId));
    dispatch(getVideo(movieId))
  }, [dispatch, movieId]);

  const calculateCircleRating = (rating) => {
    const roundedRating = Math.round(rating / 2); // Assuming rating is out of 10
    return (
      <div className="circle-rating">
        <span>{roundedRating}</span>
      </div>
    );
  };

  if (isLoading) {
    return (
      <div className='d-flex justify-content-center align-item-center'>
        <div className="loading-wave">
          <div className="loading-bar"></div>
          <div className="loading-bar"></div>
          <div className="loading-bar"></div>
          <div className="loading-bar"></div>
        </div>
      </div>
    );
  }

  if (isError) {
    // Handle error case if needed
    return <div>Error loading data.</div>;
  }

  return (
    <div className='row'>
            <div className='col-12 col-sm-6 col-md-12'>
            <h1 className='text-center my-4'>{movieDetails.original_title}</h1>
      <div className='d-flex justify-content-center'>
        <img src={imgUrl + movieDetails?.backdrop_path} alt="" />
      </div>
      {
        videoData.map(video =>  <VideoPlay key={video.id} video={video}/>)
       }
            </div>
      <div className='col-12 text-dark mt-5 col-md-12 col-sm-6'>
      <p>Released: {movieDetails.release_date}</p>
      <p id='rating1'>
        <h5> Rating</h5>
        <CircularProgressbar
          value={movieDetails.vote_average * 10}
          text={`${movieDetails.vote_average}`}
          styles={buildStyles({
            textColor: mode === 'light' ? '#fff' : '#000',
            pathColor: mode === 'light' ? '#3498db' : '#3498db',
            trailColor: mode === 'light' ? '#d6d6d6' : '#777',
          })}
        />
      </p>
      <p><h5>Language:</h5>{movieDetails.original_language}</p>
      <h5>Budget: {movieDetails.budget}</h5>
      <h5>Revenue: {movieDetails.revenue}</h5>
      <p><h5>Overview: </h5>{movieDetails.overview}</p>
      <p> <h5>Popularity: </h5>{movieDetails.popularity}</p>
      </div>
    </div>
  );
};

export default Moviedetails;
