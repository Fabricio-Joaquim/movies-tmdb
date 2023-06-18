import type { NextApiRequest, NextApiResponse } from 'next'
import { APIS } from '@/Service/baseAPI'
import { IDescriptionMovie } from '@/interfaces/IDescriptionMovie'
const { TMDBAPI } = APIS()


export default async function searchByID(req: NextApiRequest, res: NextApiResponse<IDescriptionMovie>) {
  const { id } = req.query

    const element = await TMDBAPI.get(`/movie/${id}`)
    .then(({ data }) => data)
    .catch(error => error)


  res.status(200).json(element)
}
