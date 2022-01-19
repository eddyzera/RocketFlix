import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { MovieData } from '../types'

const initialState: MovieData = {
  data: {
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
    }
  }
})

export const { actions: movieAction } = movieSlice

export default movieSlice.reducer
