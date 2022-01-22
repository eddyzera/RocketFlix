import { call, CallEffect, takeLatest } from 'redux-saga/effects'
import { movieAction } from '../store/slice/movieSlice'
import { fetchApi } from '../../service/api'

function* fetchLoadMovie(): Generator<CallEffect<any>, void, unknown> {
  console.log('Cai Aqui')
  const result = yield call(fetchApi)
  console.log(result)
}

export default function* rootSaga() {
  yield takeLatest(movieAction.loadMovie.type, fetchLoadMovie)
}
