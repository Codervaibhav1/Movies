import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchAction, fetchComedy, fetchDrama, fetchHorrer, fetchMistry, fetchRomance } from "./filterService";

const filterPageSlice = createSlice({
    name :'Filter',
    initialState:{
        actionData :[],
        romanceData:[],
        horrerData:[],
        comedyData:[],
        dramaData:[],
        mistryData:[],
        isLoading:false,
        isSuccess:false,
        isError : false
    } ,
    reducers:{

    },
    extraReducers:(builder)=>{
        builder
        .addCase(getAction.pending , state =>{
            state.isLoading = true
        })
        .addCase(getAction.fulfilled , (state , action)=>{
            state.isLoading = false
            state.isSuccess = true
            state.actionData = action.payload
        })
        .addCase(getAction.rejected , state =>{
         state.isSuccess = false
         state.isError = true
        })
        .addCase(getRomance.pending , state =>{
            state.isLoading = true
        })
        .addCase(getRomance.fulfilled , (state , action)=>{
            state.isLoading = false
            state.isSuccess = true
            state.romanceData = action.payload
        })
        .addCase(getRomance.rejected , state =>{
         state.isSuccess = false
         state.isError = true
        })
        .addCase(getHorrer.pending , state =>{
            state.isLoading = true
        })
        .addCase(getHorrer.fulfilled , (state , action)=>{
            state.isLoading = false
            state.isSuccess = true
            state.horrerData = action.payload
        })
        .addCase(getHorrer.rejected , state =>{
         state.isSuccess = false
         state.isError = true
        })
        .addCase(getComedy.pending , state =>{
            state.isLoading = true
        })
        .addCase(getComedy.fulfilled , (state , action)=>{
            state.isLoading = false
            state.isSuccess = true
            state.comedyData = action.payload
        })
        .addCase(getComedy.rejected , state =>{
         state.isSuccess = false
         state.isError = true
        })
        .addCase(getDrama.pending , state =>{
            state.isLoading = true
        })
        .addCase(getDrama.fulfilled , (state , action)=>{
            state.isLoading = false
            state.isSuccess = true
            state.dramaData = action.payload
        })
        .addCase(getDrama.rejected , state =>{
         state.isSuccess = false
         state.isError = true
        })
        .addCase(getMistry.pending , state =>{
            state.isLoading = true
        })
        .addCase(getMistry.fulfilled , (state , action)=>{
            state.isLoading = false
            state.isSuccess = true
            state.mistryData = action.payload
        })
        .addCase(getMistry.rejected , state =>{
         state.isSuccess = false
         state.isError = true
        })
    }
})

export default filterPageSlice.reducer

export const getAction = createAsyncThunk('Action/data' , async()=>{
    try {
        return await fetchAction()
    } catch (error) {
        console.log(error)
    }
})

export const getRomance = createAsyncThunk('Romance/data' , async()=>{
try {
    return await fetchRomance()
} catch (error) {
    console.log(error)
}

})
export const getHorrer = createAsyncThunk('Horrer/data' ,async()=>{
    try {
        return await fetchHorrer()
    } catch (error) {
        console.log(error)
    }
})

export const getComedy = createAsyncThunk('Comedy/Data' , async()=>{
    try {
        return await fetchComedy()
    } catch (error) {
        console.log(error)
    }
})

export const getDrama = createAsyncThunk('Drama/Data' , async()=>{
    try {
        return await fetchDrama()
    } catch (error) {
        console.log(error)
    }
})

export const getMistry = createAsyncThunk('Mistry/Data' , async()=>{
    try {
        return await fetchMistry()
    } catch (error) {
        
    }
})