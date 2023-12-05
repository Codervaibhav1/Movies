import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Mistry from '../pages/Mistry'
import { getMistry } from '../features/filterSlice/filterPageSlice'

const MistryData = () => {

    const {mistryData , isLoading} =useSelector((state)=>state.Filter)
    const dispacth = useDispatch()
console.log(mistryData)
    useEffect(()=>{
        dispacth(getMistry())
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
  mistryData?.map(mistry => <Mistry key={mistry.id} mistry={mistry}/>)
}
</div>
</div>
  )
}

export default MistryData