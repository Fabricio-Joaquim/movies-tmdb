import axios from 'axios'

const APIS = () =>{
    const baseAPI = axios.create({
        baseURL: process.env.NEXT_PUBLIC_HOST_API,
    })
    
    const TMDBAPI = axios.create({
        baseURL: process.env.BASE_URL,
        params: {
            api_key: process.env.API_KEY,
            language: 'pt-BR'
        },
        headers:{
            'Content-Type': 'application/json;charset=utf-8',
            Authorization: `Bearer ${process.env.API_TOKEN}`
        }
    })

    return { baseAPI, TMDBAPI }
}


export { APIS }