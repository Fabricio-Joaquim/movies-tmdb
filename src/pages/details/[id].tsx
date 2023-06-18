import { IDescriptionMovie } from '@/interfaces/IDescriptionMovie'
import { IRecommandationsList } from '@/interfaces/IRecommandations'
import DurationMovieComponent from './DurationMovieComponent'
import { GetServerSidePropsContext } from 'next'
import GenreComponent from './GenereComponent'
import { APIS } from '@/Service/baseAPI'
import { FaStar } from "react-icons/fa"
import Image from 'next/image'
import moment from 'moment'
import React from "react"

export default function page({ dataMovie, recommendations }: { dataMovie: IDescriptionMovie, recommendations: IRecommandationsList }) {
    return (
        <div className='flex items-center justify-center w-full relative'>
            <Image className="relative bg-cover" src={`${process.env.NEXT_PUBLIC_IMG_API}${dataMovie.backdrop_path}`} alt={dataMovie.title} width={1920} height={1080} />
            <div className='font-light  absolute z-10 bottom-0 bg-gradient-to-t from-slate-800 to-transparent w-full pl-2'>
                <p className='text-7xl font-bold'>{dataMovie.title}</p>
                <div className='flex gap-x-20'>
                    <div className='flex gap-x-2 items-center'>
                        <FaStar color='yellow' />
                        <p className='font-semibold'>{dataMovie.vote_average}</p>
                        <p className='text-sm'>| {dataMovie.popularity}</p>
                    </div>
                    <div className='flex gap-x-2 items-center'>
                        <DurationMovieComponent runtime={dataMovie.runtime} />
                        • <GenreComponent genericList={dataMovie.genres} />
                        • <p>{moment(dataMovie.release_date).format("YYYY")}</p>
                    </div>
                </div>
                <p className='text-sm'>{dataMovie.overview}</p>
                <GenreComponent genericList={dataMovie.spoken_languages} nameList='Idiomas' />
                <p>


                </p>
                <p>sasad</p>

            </div>
        </div>
    )
}

export async function getServerSideProps(ctx: GetServerSidePropsContext) {

    const { baseAPI } = APIS()
    const { id: idMovie } = ctx.query
    const dataMovie = (await baseAPI.get(`searchByID?id=${idMovie}`)).data
    const recommendations = (await baseAPI.get(`recommendations?id=${idMovie}`)).data

    return {
        props: {
            dataMovie,
            recommendations
        }
    }
}