import { useAppStore } from '@/store/store'
import { useStore } from '@/store/useStore'
import React from 'react'

export const InputSearch = () => {

    const { search, setSearch } = useAppStore()
    const { searchMovie } = useStore()

    return (
        <form className="input-group">
            <input className="input" id="Email" value={search} name="Email" onChange={e => setSearch(e.target.value)} placeholder="uiverse@verse.io" autoComplete="off" />
            <input className="input-button" onClick={searchMovie} type='submit' value="Search" />
        </form>
    )
}
