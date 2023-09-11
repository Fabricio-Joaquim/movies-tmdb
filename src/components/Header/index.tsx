import { RequestToken } from '@/interfaces/Auth/RequestToken'
import { GetStaticPaths, GetStaticProps } from 'next'
import { FaUserCircle } from 'react-icons/fa'
import { InputSearch } from '../InputSearch'
import Logo from '../../../assets/logo.png'
import { APIS } from '@/Service/baseAPI'
import { useRouter } from 'next/router'
import { useCallback } from 'react'
import Image from 'next/image'


const Header = () => {
    const { baseAPI } = APIS()
    const router = useRouter()

    const { approved } = router.query

    const getToken = useCallback(async () => {
        const { data } = await baseAPI.get<RequestToken>('user/login')
        router.push(`${process.env.NEXT_PUBLIC_AUTH_URL}/${data.request_token}?redirect_to=${process.env.NEX_PUBLIC_REDIRECT_URL}`)
    }, [])

    return (
        <div className='flex justify-between mx-2 lg:mx-10'>
            <Image alt='logo' src={Logo} height={100} width={120} className='cursor-pointer lg:ml-10' />
            <InputSearch />
            <button onClick={() => getToken()} 
            className='hover:text-fuchsia-400 duration-300 items-center justify-center flex flex-col hover:scale-110'>
                <FaUserCircle size={50} />
                Entrar
            </button>
        </div>
    )
}

export const getStaticPaths: GetStaticPaths = () => {


    return {
        paths: [],
        fallback: false
    }
}
export const getStaticProps: GetStaticProps = async (ctx) => {


    return {
        props: {

        }
    }
}

export { Header }