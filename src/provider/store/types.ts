import { ReactNode } from 'react'

export interface ProviderStorageProps {
  children: ReactNode
}

export interface MovieData {
  data: {
    title: string
    description: string
    poster: string
  }
  isLoading: boolean
}

export interface RootState {
  movie: MovieData
}
