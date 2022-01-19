import { createSelector } from '@reduxjs/toolkit'
import { RootState } from '../types'

const movieSelectSlice = (state: RootState) => state.movie

export const selectMovie = createSelector(
  [movieSelectSlice],
  (state) => state.data
)

export const selectIsloading = createSelector(
  [movieSelectSlice],
  (state) => state.isLoading
)
