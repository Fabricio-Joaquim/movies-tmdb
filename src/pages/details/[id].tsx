import { IRecommandationsList } from '@/interfaces/IRecommandations'
import { IDescriptionMovie } from '@/interfaces/IDescriptionMovie'
import { GetServerSidePropsContext } from 'next'
import Recommendation from './Recommendation'
import { FaArrowLeft } from 'react-icons/fa'
import { APIS } from '@/Service/baseAPI'
import { useRouter } from 'next/router'
import InfoMovie from './InfoMovie'
import Image from 'next/image'
import React from 'react'

interface IProps {
    dataMovie: IDescriptionMovie,
    recommendations: IRecommandationsList
}

export default function page({ dataMovie, recommendations }: IProps) {

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { back } = useRouter()

    return (
        <div className="image-wrapper h-full w-full overflow-hidden absolut">
            <Image
                src={`${process.env.NEXT_PUBLIC_IMG_API}${dataMovie.backdrop_path}`}
                alt="Imagem em tela cheia"
                layout="fill"
                objectFit="cover"
                quality={100}
            />
            <FaArrowLeft className='absolute top-3 left-3 hover:fill-slate-600 duration-150 hover:translate-x-5' onClick={() => back()} size={30} />
            <div className='font-light absolute z-10 bottom-0 bg-gradient-to-t from-slate-800 grid grid-cols-2 to-transparent w-full pb-5 pl-5'>
                <InfoMovie dataMovie={dataMovie} />
                {!!recommendations?.results?.length && <Recommendation recommendations={recommendations.results} />}
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