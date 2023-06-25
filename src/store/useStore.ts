import { useAppStore } from './store'

export const useStore = () => {
    const { getMovieBySearch, changeActiveID, getMoviesByCategory, setSearch, search } = useAppStore()

    const searchMovie = (e:any) => {
        e.preventDefault()
        getMovieBySearch(search)
        changeActiveID(0)
    }

    const changeCatecory = (category: number) => {
        changeActiveID(category)
        getMoviesByCategory(category)
        setSearch('')
    }

    return { searchMovie, changeCatecory }
}
