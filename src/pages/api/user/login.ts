import { RequestToken } from '@/interfaces/Auth/RequestToken'
import { NextApiRequest, NextApiResponse } from 'next'
import { APIS } from '@/Service/baseAPI'

export default async function handler(req: NextApiRequest, res: NextApiResponse<RequestToken>) {

    const { TMDBAPI } = APIS()
    const { data } = await TMDBAPI.get<RequestToken>('/authentication/token/new')

    res.status(200).json(data)
}
