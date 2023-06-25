import { StateCreator } from 'zustand'
import { APIS } from '@/Service/baseAPI'
import { useAppStore } from './store'
import { useRouter } from 'next/router'
export interface LanguageState {
    language: string;
    setLanguage: (language: string) => void;
}

export const createLanguageSlice: StateCreator<LanguageState> = (set, get) => ({
    language: 'pt-BR',
    setLanguage: (language) => {
        const { TMDBAPI } = APIS()
        TMDBAPI.defaults.params.language = language
        set({ language })
        

    },
})

