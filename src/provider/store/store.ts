import { configureStore } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'
import moviesReducer from './slice/movieSlice'
import sagas from './sagas'

const sagaMiddleware = createSagaMiddleware()

export default configureStore({
  reducer: {
    movie: moviesReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware)
})

sagaMiddleware.run(sagas)
