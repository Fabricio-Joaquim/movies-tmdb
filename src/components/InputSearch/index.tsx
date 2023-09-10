import { useAppStore } from '@/store/store'
import { useStore } from '@/store/useStore'
import React from 'react'

export const InputSearch = () => {

    const { search, setSearch } = useAppStore()
    const { searchMovie } = useStore()

    return (
        <form className="input-group flex items-center lg:items-start">
            <input className="input" id="movie-search" value={search} name="movie-search" onChange={e => setSearch(e.target.value)} placeholder="uiverse@verse.io" autoComplete="off" />
            <input className="input-button" onClick={searchMovie} type='submit' value="Search" />
        </form>
    )
}
