import type { NextApiRequest, NextApiResponse } from 'next'
import { IResultRequest } from '@/interfaces/IRequest'
import { APIS } from '@/Service/baseAPI'
const {  TMDBAPI } = APIS()
export default async function popularMovie(req: NextApiRequest, res: NextApiResponse<IResultRequest>) {
  const element = await TMDBAPI.get('/movie/popular')
    .then(({ data }) => data)
  res.status(200).json(element)
}
