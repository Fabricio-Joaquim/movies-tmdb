import axios from 'axios';

const APIS = () =>{
    const baseAPI = axios.create({
        baseURL: process.env.NEXT_PUBLIC_HOST_API,
    });
    
    const TMDBAPI = axios.create({
        baseURL: process.env.BASE_URL,
        params: {
            api_key: process.env.API_KEY,
            language: "en-US"
        },
    });

    return { baseAPI, TMDBAPI }
}


export { APIS };