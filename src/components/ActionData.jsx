import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAction } from '../features/filterSlice/filterPageSlice'
import ActionPage from '../pages/ActionPage'

const ActionData = () => {

    const {actionData , isLoading} =useSelector((state)=>state.Filter)
    const dispacth = useDispatch()
console.log(actionData)
    useEffect(()=>{
        dispacth(getAction())
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
  actionData?.map(action => <ActionPage key={action.id} action={action}/>)
}
</div>
</div>
  )
}

export default ActionData