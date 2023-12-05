import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getTop } from '../features/slice/trandingSlice'
import Toprated from '../pages/Toprated'

const TopData = () => {
    const {topData ,isLoading} =  useSelector((state)=>state.tranding)
    const dispatch = useDispatch()
    //  console.log(topData)
    useEffect(()=>{
         dispatch(getTop())
    },[])
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
    <div>
      <h1 className={`text-center fw-bold mb-4 text-dark`}>My Movies</h1>
        <div className="row row-cols-1 row-cols-lg-4 row-cols-sm-2 row-cols-md-3 g-4">
  {
    topData?.map(rated => <Toprated key={rated.id} rated={rated}/>)
  }
</div>
</div>
  )
}

export default TopData