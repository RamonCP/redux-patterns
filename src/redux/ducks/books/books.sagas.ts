import { call, put } from 'redux-saga/effects'

import { fetchBooksActionType, fetchOneBookActionType } from './books.types'
import { updateBooks, updateActualBook } from './books.actions'
import { hideLoading, showLoading } from '../loading/loading.actions'
import { services, ResponseGenerator } from '../../services/api'

export function* fetchBooks(action: fetchBooksActionType) {
  try {
    yield put(showLoading())
    const response: ResponseGenerator = yield call(
      services.getBooks,
      action.payload.url
    )

    yield put(updateBooks(response.data.items))
    yield put(hideLoading())
  } catch (err) {
    console.error(err)
    yield put(hideLoading())
  }
}

export function* fetchOneBook(action: fetchOneBookActionType) {
  try {
    yield put(showLoading())
    const response: ResponseGenerator = yield call(
      services.getBooks,
      action.payload.url
    )

    yield put(updateActualBook(response.data.items))
    yield put(hideLoading())
  } catch (err) {
    console.error(err)
    yield put(hideLoading())
  }
}
