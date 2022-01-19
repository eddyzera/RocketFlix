import React from 'react'
import { useSelector } from 'react-redux'
import {
  selectIsloading,
  selectMovie
} from '../../provider/store/selector/movieSelector'
import { Choosen } from './choosen'

export default function ChoosenContent() {
  const movie = useSelector(selectMovie)
  const isLoading = useSelector(selectIsloading)
  return <Choosen movie={movie} isLoading={isLoading} />
}
