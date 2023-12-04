import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

const Slide = () => {
  const { trandings } = useSelector((state) => state.tranding);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const totalSlides = Object.keys(trandings).length;

    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % totalSlides);
    }, 5000);

    return () => clearInterval(interval);
  }, [trandings]);

  const currentKey = Object.keys(trandings)[currentSlide];
  const currentSlideData = trandings[currentKey];
  const imageURL = currentSlideData?.backdrop_path
    ? `https://image.tmdb.org/t/p/w780${currentSlideData.backdrop_path}`
    : '';
   const title = currentSlideData?.original_title
   ? currentSlideData.original_title
   :'';
  return (
    <div  className="slider-container d-flex justify-content-center mt-3 postion-relative">
      {currentSlideData && (
        <div id='slide' className="slider-slide">
          {imageURL && <img id='img-slide' src={imageURL} alt={`Slide ${currentSlide + 1}`} />}
          <p>{currentSlideData.data}</p>
        </div>
      )}
      <h3 id='slidetext' className='position-absolute left-0'>{title}</h3>
    </div>
  );
};

export default Slide;
