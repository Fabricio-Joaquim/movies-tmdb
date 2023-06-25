import { useRouter } from 'next/router'

export default function Movie() {

    const router = useRouter()
    const { id_movie } = router.query

    return (
        <div>
            <h1>Movie: {id_movie}</h1>
        </div>
    )
}
