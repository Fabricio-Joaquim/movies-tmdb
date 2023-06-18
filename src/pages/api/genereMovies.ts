import { NextApiRequest, NextApiResponse } from "next"
import { APIS } from "@/Service/baseAPI"
import { Genre } from "@/interfaces/IGenre"

const { TMDBAPI } = APIS()
export default async function genreMovie(req: NextApiRequest, res: NextApiResponse<Genre[]>) {
  
  const element = await TMDBAPI.get('/genre/movie/list')
      .then(({ data }) => data)
      .catch((err) => err)
    res.status(200).json(element)
  }