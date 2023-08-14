import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

interface ICard {
    image: string
    description: string,
    id:number
}

export const Card = ({ image, description, id }: ICard) => {

    const loaderProp = ({ src }: any) => {
        return src
    }

    return (
        <Link className='movie' href={`/details/${id}`}>
            <div className="container cursor-pointer">
                <div className="box hover:shadow-slate-300">
                    <div className='flex relative'>
                        <Image loader={loaderProp}
                            src={`${process.env.NEXT_PUBLIC_IMG_API as string}${image as string} `} alt='novo' width={250} height={100} className='' />
                        <div className={'duration-1000 absolute z-10 show-description'}>
                            <span className='text-gray-900'>
                                {description}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    )
}
