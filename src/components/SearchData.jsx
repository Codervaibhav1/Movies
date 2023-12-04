import React from 'react'
import { useSelector } from 'react-redux'
import Serachpage from '../pages/Serachpage'

const SearchData = () => {
    const {searchData , isLoading} = useSelector((state)=> state.tranding)
    if(searchData.length === 0){
        return(
            <h1 className='text-center text-danger'>No Data Found</h1>
        )
    }
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
        <div className="row row-cols-1 row-cols-lg-4 row-cols-sm-2 row-cols-md-3">
  {
    searchData.map(search => <Serachpage key={search.id} search={search}/>)
  }
</div>
</div>
  )
}

export default SearchData