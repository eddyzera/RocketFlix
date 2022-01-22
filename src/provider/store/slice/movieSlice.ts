import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { MovieData } from '../types'

const initialState: MovieData = {
  data: {
    id: 0,
    title: '',
    description: '',
    poster: ''
  },
  isLoading: false
}

export const movieSlice = createSlice({
  name: 'movie',
  initialState,
  reducers: {
    loadMovie(state) {
      state.isLoading = true
    },

    changeMovie(
      state,
      action: PayloadAction<{
        id: number
        title: string
        description: string
        poster: string
      }>
    ) {
      state.data = action.payload
    }
  }
})

export const { actions: movieAction } = movieSlice

export default movieSlice.reducer
