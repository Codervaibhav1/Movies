import React, { useEffect, useState } from 'react'
import Tranding from '../components/Tranding'
import { useDispatch, useSelector } from 'react-redux'
import { getPageData, getTranding } from '../features/slice/trandingSlice'
import useDarkMode from '../components/DarkLight'
import Slide from '../components/Slide'
import { Link } from 'react-router-dom'

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
<nav id='second-nav' className="navbar navbar-expand-lg bg-light shadow-lg">
      <div className="container">
        <img id="logo" src='' alt="" />
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon bg-light rounded-1"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex align-item-center justify-content-center">
            <li className="nav-item">
              <Link
                to={"/actionpage"}
                className="nav-link active mx-3"
                aria-current="page"
                href="#"
              >
                Action
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to={"/romance"}
                className="nav-link active mx-3"
                aria-current="page"
                href="#"
              >
               Romance
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to={"/horrer"}
                className="nav-link active mx-3"
                aria-current="page"
                href="#"
              >
              Horror
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to={"/comedy"}
                className="nav-link active mx-3"
                aria-current="page"
                href="#"
              >
              Comedy
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to={"/drama"}
                className="nav-link active mx-3"
                aria-current="page"
                href="#"
              >
              Drama
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to={"/mistry"}
                className="nav-link active mx-3"
                aria-current="page"
                href="#"
              >
              Mystery
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  <Slide/>
      <h1 className={`text-center fw-bold mb-4`}>Tranding</h1>
        <div className="row row-cols-1 row-cols-lg-4 row-cols-sm-2 row-cols-md-3 g-4">
  {
    trandings?.map(tranding => <Tranding key={tranding.id} tranding={tranding}/>)
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