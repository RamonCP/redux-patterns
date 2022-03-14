import { put, delay } from 'redux-saga/effects'

import { showNotify, hideNotify } from '../actions/notify'

export function* onAddToCart() {
  yield put(showNotify({ message: 'Book added successfully', type: 'success' }))
  yield delay(1500)
  yield put(hideNotify())
}
