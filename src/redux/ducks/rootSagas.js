import { takeLatest, all } from 'redux-saga/effects'

import { TypesBooks } from './books/books.actions'
import { fetchBooks, fetchOneBook } from './books/books.sagas'

import { CartTypes } from './cart/cart.actions'
import { onAddToCart } from './cart/cart.sagas'

export default function* rootSaga() {
  return yield all([
    takeLatest(TypesBooks.FETCH_BOOKS, fetchBooks),
    takeLatest(TypesBooks.FETCH_ONE_BOOK, fetchOneBook),
    takeLatest(CartTypes.ADD_BOOK, onAddToCart)
  ])
}
