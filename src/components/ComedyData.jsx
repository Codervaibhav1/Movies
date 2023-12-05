import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getComedy } from '../features/filterSlice/filterPageSlice'
import Comedy from '../pages/Comedy'

const ComedyData = () => {

    const {comedyData , isLoading} =useSelector((state)=>state.Filter)
    const dispacth = useDispatch()
console.log(comedyData)
    useEffect(()=>{
        dispacth(getComedy())
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
  comedyData?.map(comedy => <Comedy key={comedy.id} comedy={comedy}/>)
}
</div>
</div>
  )
}

export default ComedyData