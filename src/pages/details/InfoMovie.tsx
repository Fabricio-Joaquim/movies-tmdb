import { IDescriptionMovie } from '@/interfaces/IDescriptionMovie'
import DurationMovieComponent from './DurationMovieComponent'
import GenreComponent from './GenericComponent'
import { FaStar } from 'react-icons/fa'
import React, { memo } from 'react'
import moment from 'moment'

const InfoMovie = ({ dataMovie }: { dataMovie: IDescriptionMovie }) =>
    <div className='w-9/12'>
        <p className='text-7xl font-bold mb-10'>{dataMovie?.title}</p>
        <div className='flex gap-x-20 mb-8'>
            <div className='flex gap-x-2 items-center'>
                <FaStar color='yellow' />
                <p className='font-semibold'>{dataMovie?.vote_average}</p>
                <p className='text-sm'>| {dataMovie?.popularity}</p>
                </div>
                <div className='flex gap-x-2 items-center'>
                    <DurationMovieComponent runtime={dataMovie?.runtime} />
                    • <GenreComponent genericList={dataMovie?.genres} />
                    • <p>{moment(dataMovie?.release_date).format('YYYY')}</p>
                </div>
            </div>
        <p className='text-sm'>{dataMovie?.overview}</p>
        <GenreComponent genericList={dataMovie?.spoken_languages} nameList='Idiomas' />
    </div>


export default memo(InfoMovie)