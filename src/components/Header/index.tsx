import { GetStaticPaths, GetStaticProps } from 'next'
import { RoutersENum } from '@/Enums/routersEnum'
import { FaUserCircle } from 'react-icons/fa'
import { InputSearch } from '../InputSearch'
import { useAppStore } from '@/store/store'
import Logo from '../../../assets/logo.png'
import Image from 'next/image'
import Link from 'next/link'

const Header = () => {

    return (
        <div className='flex justify-between mx-2 lg:mx-10'>
            <Image alt='logo' src={Logo} height={100} width={120} className='cursor-pointer lg:ml-10' />
            <InputSearch />
            <Link href={RoutersENum.LOGIN} className='hover:text-fuchsia-400 duration-300 items-center justify-center flex flex-col hover:scale-110'>
                <FaUserCircle size={50} />
                Entrar
            </Link>
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