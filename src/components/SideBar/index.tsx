import { Genre } from '@/interfaces/IGenre'
import { useAppStore } from '@/store/store'
import { useStore } from '@/store/useStore'
import React from 'react'

interface IProps {
    genereMovies: Genre[]
}

export const SideBar = ({genereMovies}:IProps) => {
    const { activeID } = useAppStore()
    const {changeCatecory} = useStore()
    return (
        <aside className="flex flex-col items-center justify-start h-fit text-center bg-gray-800 border-r-2">
{            <ul className="flex-col items-center justify-center slow-show-itens-list">
                {
                    genereMovies?.map((item:Genre) => {
                        return (
                            <React.Fragment key={item.id}>
                                <li onClick={() => changeCatecory(item.id)} key={item.id}
                                    className={'text-white item text-xl cursor-pointer font-bold hover:text-gray-400'}>
                                    {item.name}</li>
                                <span className={`w-1/2 h-1 rounded-full ${activeID === item.id ? 'animate-pulse item-selected' : 'hidden'}`} />
                            </React.Fragment>
                        )
                    })
                }
            </ul>}
        </aside>
    )
}
