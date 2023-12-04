import { configureStore } from "@reduxjs/toolkit";
import trandingReducer from './slice/trandingSlice'
const store = configureStore({
    reducer:{
     tranding : trandingReducer
    }
})

export default store