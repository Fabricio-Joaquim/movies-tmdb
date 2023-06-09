import axios from 'axios';
import { useAppStore } from '@/store/store';
const APIS = () =>{
    const baseAPI = axios.create({
        baseURL: process.env.NEXT_PUBLIC_HOST_API,
        headers:{
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Access-Control-Allow-Credentials': true,
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET,OPTIONS,PATCH,DELETE,POST,PUT',
            'Access-Control-Allow-Headers':'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'   
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