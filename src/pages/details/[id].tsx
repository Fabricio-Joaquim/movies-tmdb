/* import { baseAPI } from '@/Service/baseAPI'
 */import { GetServerSidePropsContext, InferGetServerSidePropsType } from 'next'

export default function page({
    pageComponentProps
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
    return (
        <>
        
        </>
    )
}

export async function getServerSideProps(ctx: GetServerSidePropsContext) {

/*     const result = (await baseAPI.get("ListMovies")).data
 */
    return {
        props: {
            pageComponentProps: {
                
            }
        }
    }
}