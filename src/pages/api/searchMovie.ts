import { NextApiRequest, NextApiResponse } from 'next'
import { APIS } from '@/Service/baseAPI'

export default async function searchMovie(req: NextApiRequest, res: NextApiResponse) {

    const { search } = req.query
    const { TMDBAPI } = APIS()

    const data = await TMDBAPI.get(`/search/movie?query=${search}`).then(({ data }) => data)

    return res.json(data)
}
