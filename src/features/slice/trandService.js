import axios from "axios"

export const fetchTranding = async() =>{
   const response = await axios.get('https://api.themoviedb.org/3/discover/movie?api_key=c614824d65e8fc3257b0b8af97ed9baa')
   return response.data.results
}

export const moviePageData = async(movieId)=>{
    const response = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=c614824d65e8fc3257b0b8af97ed9baa`)
    return response.data
}

export const fetchSearchData = async(text)=>{
    const response = await axios.get(`https://api.themoviedb.org/3/search/movie?query=${text}&api_key=c614824d65e8fc3257b0b8af97ed9baa`)
    // console.log(response.data.results)
    return response.data.results
}

export const fetchPopular = async()=>{
    const response = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=c614824d65e8fc3257b0b8af97ed9baa`)
    // console.log(response.data.results)
    return response.data.results
}

export const fetchTop = async()=>{
    const response = await axios.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=c614824d65e8fc3257b0b8af97ed9baa`)
    // console.log(response.data.results)
    return response.data.results
}
export const fetchUpcoming = async()=>{
    const response = await axios.get(`https://api.themoviedb.org/3/movie/upcoming?api_key=c614824d65e8fc3257b0b8af97ed9baa`)
    // console.log(response.data.results)
    return response.data.results
}

export const fetchPageData = async(page)=>{
    const response = await axios.get(`https://api.themoviedb.org/3/movie/now_playing?page=${page}&api_key=c614824d65e8fc3257b0b8af97ed9baa`)
    // console.log(response.data.results)
    return response.data.results
} 

export const fetchVideo = async(videoId)=>{
    const response = await axios.get(`https://api.themoviedb.org/3/movie/${videoId}/videos?api_key=c614824d65e8fc3257b0b8af97ed9baa`)
    // console.log(response.data.results)
    return response.data.results
}