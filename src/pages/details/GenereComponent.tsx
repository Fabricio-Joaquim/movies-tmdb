import { SpokenLanguage } from '@/interfaces/IDescriptionMovie'
import { Genre } from '@/interfaces/IMovieDetail'
import React from 'react'

const MapComponentName = ({ genericList, nameList }: { genericList: SpokenLanguage[] | Genre[], nameList?: string }) =>
    <p className='text-base'>
    {
            genericList.map((item: SpokenLanguage | Genre, index: number) =>
                <React.Fragment key={item.name}>{item.name}{genericList.length - 1 === index ? "" : ", "} </React.Fragment>
            )}
    </p>

export default React.memo(MapComponentName)