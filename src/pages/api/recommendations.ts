import type { NextApiRequest, NextApiResponse } from 'next'
import { APIS } from '@/Service/baseAPI'
import { IRecommandationsList } from '@/interfaces/IRecommandations'
const { TMDBAPI } = APIS()


export default async function handler(req: NextApiRequest, res: NextApiResponse<IRecommandationsList>) {
  const { id } = req.query

    const element = await TMDBAPI.get(`/movie/${id}/recommendations`)
    .then(({ data }) => data)
    .catch(error => error)


  res.status(200).json(element)
}
