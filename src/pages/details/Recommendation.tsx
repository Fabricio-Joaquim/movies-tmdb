import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'
import { Result } from '@/interfaces/IRecommandations'
import { Carousel } from '@trendyol-js/react-carousel'
import {useRouter} from 'next/router'
import Image from 'next/image'
import React from 'react'
const Recommendation = ({ recommendations }: { recommendations: Result[] }) => {

    if (!recommendations?.length) return null

    const router = useRouter()

    return (
        <div className='self-end'>
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
                {
                recommendations.map((item) => (
                    <div key={item?.id} 
                    onClick={() => router.push(`/details/${item?.id}`)}
                    className='flex flex-col gap-x-2 item-recomandation'>
                        <Image
                            src={`${process.env.NEXT_PUBLIC_IMG_API}${item?.poster_path}`}
                            alt={item?.title}
                            layout="fixed"
                            width={200}
                            height={300}
                            quality={30}
                        />
                        <p className='text-sm font-semibold absolute bottom-0 text-center hidden-span'>{item?.title}</p>
                    </div>
                ))}
            </Carousel>
        </div>
    )
}

export default Recommendation