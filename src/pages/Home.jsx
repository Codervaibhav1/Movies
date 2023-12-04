import React, { useEffect, useState } from 'react'
import Tranding from '../components/Tranding'
import { useDispatch, useSelector } from 'react-redux'
import { getPageData, getTranding } from '../features/slice/trandingSlice'
import useDarkMode from '../components/DarkLight'
import Slide from '../components/Slide'

const Home = () => {
    const {trandings , isLoading} = useSelector(state => state.tranding)
    const dispatch = useDispatch()
    const [currentPage, setCurrentPage] = useState(1);
    useEffect(()=>{
    dispatch(getTranding())
    dispatch(getPageData(currentPage))
    },[dispatch ,currentPage])


    const handleLoadMore = () => {
      setCurrentPage((prevPage) => prevPage + 1);
    };

    const handlePrevPage = () => {
      setCurrentPage(prevPage => (prevPage > 1 ? prevPage - 1 : 1));
    };
  

    if(isLoading){
        return(
            <div className='d-flex justify-content-center align-item-center'>
                <div className="loading-wave">
  <div className="loading-bar"></div>
  <div className="loading-bar"></div>
  <div className="loading-bar"></div>
  <div className="loading-bar"></div>
</div>
             </div>
        )
    }
  return (
<>
<div>
  <Slide/>
      <h1 className={`text-center fw-bold mb-4`}>Tranding</h1>
        <div className="row row-cols-1 row-cols-lg-4 row-cols-sm-2 row-cols-md-3 g-4">
  {
    trandings.map(tranding => <Tranding key={tranding.id} tranding={tranding}/>)
  }
</div>
<div className="text-center my-4">
<button className="btn btn-primary me-2" onClick={handlePrevPage}>
          Prev
        </button>
        <button className="btn btn-primary" onClick={handleLoadMore}>
          Next
        </button>
        </div>
</div>
</>
  )
}

export default Home