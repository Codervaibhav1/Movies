import axios from "axios"

export const fetchAction = async()=>{
    const response = await axios.get('https://api.themoviedb.org/3/discover/movie?api_key=c614824d65e8fc3257b0b8af97ed9baa&with_genres=28')
    // console.log(response.data.results)
    return response.data.results
}

export const fetchRomance = async()=>{
    const response = await axios.get('https://api.themoviedb.org/3/discover/movie?api_key=c614824d65e8fc3257b0b8af97ed9baa&with_genres=10749')
    // console.log(response.data.results)
    return response.data.results
}

export const fetchHorrer = async()=>{
    const response = await axios.get('https://api.themoviedb.org/3/discover/movie?api_key=c614824d65e8fc3257b0b8af97ed9baa&with_genres=27')
    // console.log(response.data.results)
    return response.data.results
}

export const fetchComedy = async()=>{
    const response = await axios.get('https://api.themoviedb.org/3/discover/movie?api_key=c614824d65e8fc3257b0b8af97ed9baa&with_genres=35')
    // console.log(response.data.results)
    return response.data.results
}

export const fetchDrama = async()=>{
    const response = await axios.get('https://api.themoviedb.org/3/discover/movie?api_key=c614824d65e8fc3257b0b8af97ed9baa&with_genres=18')
    // console.log(response.data.results)
    return response.data.results
}

export const fetchMistry = async()=>{
    const response = await axios.get('https://api.themoviedb.org/3/discover/movie?api_key=c614824d65e8fc3257b0b8af97ed9baa&with_genres=9648')
    // console.log(response.data.results)
    return response.data.results
}
