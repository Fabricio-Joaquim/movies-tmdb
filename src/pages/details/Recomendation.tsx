import { IRecommandationsList } from '@/interfaces/IRecommandations'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'
import { Carousel } from '@trendyol-js/react-carousel'
import Image from 'next/image'
import React from 'react'

export const RecomendationMoviesCarousel = ({ recommendations }: { recommendations: IRecommandationsList }) => {
    return (
        <div className='bottom-0'>
            <p className='text-base font-light ml-10'>Relacionados</p>
            <Carousel show={3.5} slide={3} swiping={true}
                className='w-full h-80 carousel-recomandations'
                rightArrow={
                    <div className='bg-slate-800 rounded-full w-10 h-10 flex items-center justify-center'>
                        <FaArrowRight className='text-white' size={20} />
                    </div>
                }
                leftArrow={
                    <div className='bg-slate-800 rounded-full w-10 h-10 flex items-center justify-center'>
                        <FaArrowLeft className='text-white' size={20} />
                    </div>
                }
            >
                {recommendations.results.map((item) => (
                    <div key={item.id} className='flex flex-col gap-x-2 item-recomandation'>
                        <Image
                            src={`${process.env.NEXT_PUBLIC_IMG_API}${item.poster_path}`}
                            alt="Imagem em tela cheia"
                            layout="fixed"
                            width={200}
                            height={300}
                            quality={30}
                        />
                        <p className='text-sm font-semibold absolute bottom-0 text-center hidden-span'>{item.title}</p>
                    </div>
                ))}
            </Carousel>
        </div>
    )
}
