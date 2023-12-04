import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchPageData, fetchPopular, fetchSearchData, fetchTop, fetchTranding, fetchUpcoming, fetchVideo, moviePageData } from "./trandService";

const trandingSlice = createSlice({
    name:'tranding',
     initialState:{
        trandings:[],
        movieDetails:[],
        searchData:[],
        popularData:[],
        topData:[],
        upcomingData:[],
        videoData :[],
        isLoading : false,
        isSuccess: false,
        isError: false
     },
     reducers:{

     },
     extraReducers: (builder)=>{
         builder
         .addCase(getTranding.pending , state =>{
            state.isLoading = true
         })
         .addCase(getTranding.fulfilled , ( state , action) =>{
            state.isLoading = false
            state.isSuccess = true
            state.trandings = action.payload
         })
         .addCase(getTranding.rejected , state =>{
            state.isSuccess = false
            state.isError = true
         })
         .addCase(getmovieData.pending , state =>{
            state.isLoading = true
         })
         .addCase(getmovieData.fulfilled , (state , action)=>{
            state.isSuccess = true
            state.isLoading = false
            state.movieDetails = action.payload
         })
         .addCase(getmovieData.rejected , state =>{
            state.isError= true
            state.isSuccess = false
         })
         .addCase(getSerachData.pending , state =>{
            state.isLoading = true
         })
         .addCase(getSerachData.fulfilled , (state , action)=>{
            state.isSuccess = true
            state.isLoading = false
            state.searchData = action.payload
         })
         .addCase(getSerachData.rejected , state =>{
            state.isError= true
            state.isSuccess = false
         })
         .addCase(getPopular.pending , state =>{
            state.isLoading = true
         })
         .addCase(getPopular.fulfilled , (state , action)=>{
            state.isSuccess = true
            state.isLoading = false
            state.popularData = action.payload
         })
         .addCase(getPopular.rejected , state =>{
            state.isError= true
            state.isSuccess = false
         })
         .addCase(getTop.pending , state =>{
            state.isLoading = true
         })
         .addCase(getTop.fulfilled , (state , action)=>{
            state.isSuccess = true
            state.isLoading = false
            state.topData = action.payload
         })
         .addCase(getTop.rejected , state =>{
            state.isError= true
            state.isSuccess = false
         })
         .addCase(getUpcoming.pending , state =>{
            state.isLoading = true
         })
         .addCase(getUpcoming.fulfilled , (state , action)=>{
            state.isSuccess = true
            state.isLoading = false
            state.upcomingData = action.payload
         })
         .addCase(getUpcoming.rejected , state =>{
            state.isError= true
            state.isSuccess = false
         })
         .addCase(getPageData.pending , state =>{
            state.isLoading = true
         })
         .addCase(getPageData.fulfilled , (state , action)=>{
            state.isSuccess = true
            state.isLoading = false
            state.trandings = action.payload
         })
         .addCase(getPageData.rejected , state =>{
            state.isError= true
            state.isSuccess = false
         })
         .addCase(getVideo.pending , state =>{
            state.isLoading = true
         })
         .addCase(getVideo.fulfilled , (state , action)=>{
            state.isSuccess = true
            state.isLoading = false
            state.videoData = action.payload
         })
         .addCase(getVideo.rejected , state =>{
            state.isError= true
            state.isSuccess = false
         })
     }

}) 

export default trandingSlice.reducer

export const getTranding = createAsyncThunk('Tranding/data' , async()=>{
    try {
        return await fetchTranding()
    } catch (error) {
        console.log(error)
    }
})
export const getmovieData = createAsyncThunk('Movie/Details' , async(movieId)=>{
   try {
    return await moviePageData(movieId)
   } catch (error) {
    console.log(error)
   }
})

export const getSerachData = createAsyncThunk('serach/data' , async(text)=>{
    try {
        return await fetchSearchData(text)
    } catch (error) {
        console.log(error)
    }
})

export const getPopular = createAsyncThunk('Popular/data' , async()=>{
   try {
    return await fetchPopular()
   } catch (error) {
    console.log(error)
   }
})
export const getTop = createAsyncThunk('Top/data' , async()=>{
    try {
        return await fetchTop()
    } catch (error) {
        console.log(error)
    }
})

export const getUpcoming = createAsyncThunk('Upcoming/data' , async()=>{
    try {
        return await fetchUpcoming()
    } catch (error) {
        console.log(error)
    }
})
export const getPageData = createAsyncThunk('NowPlaying/data', async (page) => {
   try {
    return await fetchPageData(page);
   } catch (error) {
    console.log(error)
   }
  });

  export const getVideo = createAsyncThunk('Video/Paly' , async(videoId)=>{
    try {
        return await fetchVideo(videoId)
    } catch (error) {
        console.log(error)
    }
  })