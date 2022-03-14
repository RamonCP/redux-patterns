import { takeLatest, all } from 'redux-saga/effects'

import { TypesBooks } from '../actions/books'
import { fetchBooks, fetchOneBook } from './books'

import { CartTypes } from '../actions/cart'
import { onAddToCart } from './cart'

export default function* rootSaga() {
  return yield all([
    takeLatest(TypesBooks.FETCH_BOOKS, fetchBooks),
    takeLatest(TypesBooks.FETCH_ONE_BOOK, fetchOneBook),
    takeLatest(CartTypes.ADD_BOOK, onAddToCart)
  ])
}
