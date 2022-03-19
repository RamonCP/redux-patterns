import { all, takeLatest } from 'redux-saga/effects'

import { BooksTypesAction } from './books/books.types'
import { fetchBooks, fetchOneBook } from './books/books.sagas'

import { CartTypesAction } from './cart/cart.types'
import { onAddToCart } from './cart/cart.sagas'

export default function* rootSaga(): Generator {
  return yield all([
    takeLatest(BooksTypesAction.FETCH_BOOKS, fetchBooks),
    takeLatest(BooksTypesAction.FETCH_ONE_BOOK, fetchOneBook),
    takeLatest(CartTypesAction.ADD_BOOK, onAddToCart)
  ])
}
