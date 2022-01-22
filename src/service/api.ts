import axios from 'axios'
import { ResponseAPI } from './types'

export const fetchApi = async (): Promise<{
  id: number
  title: string
  description: string
  poster: string
}> => {
  const { data } = await axios.get(
    'https://api.themoviedb.org/3/discover/tv?api_key=6806d690520ce3421ea5d2f116512e7f'
  )

  const parse = parseData(data.results)
  const response = randomResult(parse)
  return response
}

const parseData = (
  resultsApi: Array<ResponseAPI>
): Array<{
  id: number
  title: string
  description: string
  poster: string
}> => {
  return resultsApi.map((result) => {
    return {
      id: result.id,
      title: result.original_name,
      description: result.overview,
      poster: result.poster_path
    }
  })
}

const randomResult = (
  response: Array<{
    id: number
    title: string
    description: string
    poster: string
  }>
): {
  id: number
  title: string
  description: string
  poster: string
} => {
  const randomValue = Math.floor(Math.random() * response.length)
  return response[randomValue]
}
