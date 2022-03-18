import { call, put } from 'redux-saga/effects'

import { updateBooks, updateActualBook } from './books.actions'
import { hideLoading, showLoading } from '../loading/loading.actions'
import { services } from '../../services/api'

export function* fetchBooks(action) {
  try {
    yield put(showLoading())
    const response = yield call(services.getBooks, action.payload.url)

    yield put(updateBooks(response.items))
    yield put(hideLoading())
  } catch (err) {
    console.error(err)
    yield put(hideLoading())
  }
}

export function* fetchOneBook(action) {
  try {
    yield put(showLoading())
    const response = yield call(services.getBooks, action.payload.url)

    yield put(updateActualBook(response))
    yield put(hideLoading())
  } catch (err) {
    console.error(err)
    yield put(hideLoading())
  }
}