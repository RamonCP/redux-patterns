import { put, delay } from 'redux-saga/effects'

import { showNotify, hideNotify } from '../notify/notify.actions'

export function* onAddToCart() {
  yield put(showNotify({ message: 'Book added successfully', type: 'success' }))
  yield delay(1500)
  yield put(hideNotify())
}
