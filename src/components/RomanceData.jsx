import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Romance from '../pages/Romance'
import { getRomance } from '../features/filterSlice/filterPageSlice'

const RomanceData = () => {

    const {romanceData , isLoading} =useSelector((state)=>state.Filter)
    const dispacth = useDispatch()
// console.log(romanceData)
    useEffect(()=>{
        dispacth(getRomance())
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
  romanceData.map(romance => <Romance key={romance.id} romance={romance}/>)
}
</div>
</div>
  )
}

export default RomanceData