import axios from 'axios'

export const fetchApi = async (): Promise<any> => {
  const response = await axios.get(
    'https://api.themoviedb.org/3/discover/tv?api_key=6806d690520ce3421ea5d2f116512e7f'
  )

  return response.data.results
}
