import React from 'react';


const VideoPlay = ({video}) => {
    // console.log(video)
const {key ,type } = video

  if ((type === 'Official Trailer' || type === 'Trailer' )) {
    return (
      <div className="video-player-container d-flex justify-content-center my-2">
       <a href={`https://www.youtube.com/watch?v=${key}`} className='btn btn-danger '> Watch Trailer</a>
      </div>
    );
  }
  return null;
};

export default VideoPlay;
