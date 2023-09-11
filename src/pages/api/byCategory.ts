import { ICategory } from '@interfaces/Movies/ICategory'
import { NextApiRequest, NextApiResponse } from 'next'
import { APIS } from '@/Service/baseAPI'

export default async function handler(req: NextApiRequest, res: NextApiResponse<ICategory>) {

    const { TMDBAPI } = APIS()
    const { id_category } = req.query
    const element = await TMDBAPI.get(`/list/${id_category}`)
    .then(({ data }) => data)
    .catch((err) => err)
    res.status(200).json(element)
}
