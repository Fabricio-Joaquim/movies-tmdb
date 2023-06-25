import { IResultRequest } from '@/interfaces/IRequest'
import { ICategory } from '@/interfaces/ICategory'
import { APIS } from '@/Service/baseAPI'
import { StateCreator } from 'zustand'

export type movieByCategory = {
    category_ID: number,
    listMovies: IResultRequest | ICategory,
    getMoviesByCategory: (id: number) => void,
    getMovieBySearch: (search: string) => void
}
export const listMoviesSlice: StateCreator<movieByCategory> = ((set, get) => ({
    category_ID: 0,
    listMovies: {
        page: 0,
        results: [],
        total_pages: 0,
        total_results: 0
    },
    getMoviesByCategory: async (id: number) => {
        const { baseAPI } = APIS()

        if (get().category_ID === id) {
            const result = (await baseAPI.get('ListMovies')).data
            set({ listMovies: result, category_ID: id })
        }

        const result = (await baseAPI.get(`byCategory?id_category=${id}`)).data
        set({ listMovies: result, category_ID: id })

    },
    getMovieBySearch: async (search: string) => {
        //@ts-ignore
        set({ listMovies: [] })
        const { baseAPI } = APIS()
        const result = (await baseAPI.get(`searchMovie?search=${search}`)).data
        
        
        set({ listMovies: result, category_ID: 0 })
    }
}))

