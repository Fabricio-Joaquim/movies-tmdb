import { Genre } from '@/interfaces/IGenere';
import { APIS } from '@/Service/baseAPI';
import { StateCreator } from 'zustand';

export type sideBarSliceType = {
    genereMovies: Genre[];
    activeID: number;
    changeActiveID: (id: number) => void;

}
const { baseAPI, TMDBAPI } = APIS()
export const sideBarSlice: StateCreator<sideBarSliceType> = ((set) => ({
    genereMovies: [],
    activeID: 0,
    changeActiveID: (id: number) => {
        set({ activeID: id })
    }
}))

