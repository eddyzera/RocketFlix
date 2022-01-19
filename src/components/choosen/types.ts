import { MovieData } from '../../provider/store/types'

export interface MovieProps {
  movie: {
    title: string
    description: string
    poster: string
  }
  isLoading: boolean
}
