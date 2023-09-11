import { IResultRequest, Result } from '@/interfaces/IRequest'
import { GetServerSidePropsContext } from 'next'
import { SideBar } from '@/components/SideBar'
import { Header } from '@/components/Header'
import { Genre } from '@/interfaces/IGenre'
import { useAppStore } from '@/store/store'
import { APIS } from '@/Service/baseAPI'
import { Card } from '@/components/Card'

export default function Home({ result, genereMovies }: { result: IResultRequest, genereMovies: Genre[] }) {

  const { listMovies } = useAppStore()

  const homePage = listMovies?.results?.length ? listMovies.results : result.results
  const categoryMovies = listMovies?.items?.length ? listMovies.items : homePage

  
  return (
    <main className='my-8'>
      <Header />
      <div className='flex flex-row'>
        <SideBar genereMovies={genereMovies} />
        <div className="flex min-h-screen p-4 flex-row flex-wrap items-center gap-10 justify-between ${inter.className}">
          {
            categoryMovies.map((item:Result) => {
              return (
                <div key={item.id} className="flex flex-col items-center justify-center">
                  <Card
                    image={item.poster_path}
                    description={item.overview}
                    {...item}
                  />
                </div>
              )
            })
          }
        </div>
      </div>
    </main>
  )
}

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  const { baseAPI } = APIS()

  const result = (await baseAPI.get('ListMovies')).data
  const response = (await baseAPI.get('/genereMovies')).data.genres

  return {
    props: { result, genereMovies: response },

  }
}