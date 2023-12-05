import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getDrama } from '../features/filterSlice/filterPageSlice'
import Drama from '../pages/Drama'

const DramaData = () => {

    const {dramaData , isLoading} =useSelector((state)=>state.Filter)
    const dispacth = useDispatch()
console.log(dramaData)
    useEffect(()=>{
        dispacth(getDrama())
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
  dramaData?.map(drama => <Drama key={drama.id} drama={drama}/>)
}
</div>
</div>
  )
}

export default DramaData