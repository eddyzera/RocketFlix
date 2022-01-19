import { configureStore } from '@reduxjs/toolkit'
import moviesReducer from './slice/movieSlice'

export default configureStore({
  reducer: {
    movie: moviesReducer
  }
})
