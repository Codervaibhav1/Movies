import React, { useEffect } from 'react'
import { getHorrer } from '../features/filterSlice/filterPageSlice'
import Horrer from '../pages/Horrer'
import { useDispatch, useSelector } from 'react-redux'

const HorrorData = () => {


    const {horrerData , isLoading} =useSelector((state)=>state.Filter)
    const dispacth = useDispatch()
console.log(horrerData)
    useEffect(()=>{
        dispacth(getHorrer())
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
  horrerData?.map(horrer => <Horrer key={horrer.id} horrer={horrer}/>)
}
</div>
</div>
  )
}

export default HorrorData