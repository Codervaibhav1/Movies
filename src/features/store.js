import { configureStore } from "@reduxjs/toolkit";
import trandingReducer from './slice/trandingSlice'
import filterReducer from './filterSlice/filterPageSlice'
const store = configureStore({
    reducer:{
     tranding : trandingReducer,
     Filter : filterReducer
    }
})

export default store