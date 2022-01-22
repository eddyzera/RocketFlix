import { call, takeLatest, put } from 'redux-saga/effects'
import { movieAction } from '../store/slice/movieSlice'
import { fetchApi } from '../../service/api'

function* fetchLoadMovie() {
  const result: {
    id: number
    title: string
    description: string
    poster: string
  } = yield call(fetchApi)
  yield put(movieAction.changeMovie(result))
}

export default function* rootSaga() {
  yield takeLatest(movieAction.loadMovie.type, fetchLoadMovie)
}
