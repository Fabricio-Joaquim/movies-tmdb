import { GetStaticPaths, GetStaticProps } from 'next'
import { InputSearch } from '../InputSearch'
import { useAppStore } from '@/store/store'
import Logo from '../../../assets/logo.png'
import country from '@/pages/api/mock'
import Image from 'next/image'

const Header = () => {
    const { setLanguage } = useAppStore()
    const handleDropdown = (e: any) => {
        const dropdown = document.getElementById(e?.target?.dataset?.dropdownToggle)
        if (dropdown?.classList?.contains('hidden')) {
            dropdown?.classList?.remove('hidden')
        } else {
            dropdown?.classList?.add('hidden')
        }
    }
    const onCLick = (sigla: string, e: any) => {
        setLanguage(sigla); handleDropdown(e)
    }


    return (
        <div className='flex justify-between mx-10'>
            <Image alt='logo' src={Logo} height={100} width={120} className='cursor-pointer ml-10'/>
            <InputSearch />
            <div className='relative'>
                <button onClick={handleDropdown} data-dropdown-toggle='dropdown'>Idioma</button>
                <div id='dropdown' className='hidden absolute top-10 z-50 right-0 bg-gray-100 language-list'>
                    <ul className='flex flex-col justify-start h-96 overflow-scroll w-96'>
                        {
                            country.map((pais) =>
                                (<li key={pais.nome} onClick={(e) => onCLick(pais.sigla, e)} className='flex w-full justify-start gap-4'><Image alt='pt' src={pais.bandeira} width={20} height={40} />{pais.nome}</li>)

                            )}
                    </ul>
                </div>
            </div>
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