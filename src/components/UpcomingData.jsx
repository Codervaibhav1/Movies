import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Upcoming from '../pages/Upcoming'
import { getUpcoming } from '../features/slice/trandingSlice'

const UpcomingData = () => {
    const {upcomingData ,isLoading} =  useSelector((state)=>state.tranding)
    const dispatch = useDispatch()
    //  console.log(upcomingData)
    useEffect(()=>{
         dispatch(getUpcoming())
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
  upcomingData.map(upcoming => <Upcoming key={upcoming.id} upcoming={upcoming}/>)
}
</div>
</div>
  )
}

export default UpcomingData