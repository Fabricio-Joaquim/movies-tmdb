import axios from 'axios';
import { useAppStore } from '@/store/store';
const APIS = () =>{
    const baseAPI = axios.create({
        baseURL: process.env.NEXT_PUBLIC_HOST_API,
        headers:{
            'Content-Type': "*",
            'Accept': "*",
            'Access-Control-Allow-Credentials': true,
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': '*',
            'Access-Control-Allow-Headers': "*"   
        }
    });
    
    const TMDBAPI = axios.create({
        baseURL: process.env.BASE_URL,
        params: {
            api_key: process.env.API_KEY,
            language: "pt-BR"
        },
    });

    return { baseAPI, TMDBAPI }
}


export { APIS };