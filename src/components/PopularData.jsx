import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPopular } from '../features/slice/trandingSlice'
import Popular from '../pages/Popular'

const PopularData = () => {
    const {popularData ,isLoading} =  useSelector((state)=>state.tranding)
    const dispatch = useDispatch()

    useEffect(()=>{
         dispatch(getPopular())
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
    popularData.map(popular => <Popular key={popular.id} popular={popular}/>)
  }
</div>
</div>
  )
}

export default PopularData