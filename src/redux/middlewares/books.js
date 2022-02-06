import { TypesBooks, updateBooks } from '../actions/books'
import { ApiRequest } from '../actions/api'
import { showLoading, hideLoading } from '../actions/loading'

const url = 'https://www.googleapis.com/books/v1/volumes?q=react'
const headers = {
  'Content-type': 'application/json; charset=UTF-8'
}

export const fetchBooks =
  ({ dispatch }) =>
  (next) =>
  (action) => {
    next(action)

    if (action.type === TypesBooks.BOOK_FETCH) {
      dispatch(
        ApiRequest(
          url,
          'GET',
          null,
          headers,
          TypesBooks.FETCH_BOOKS_SUCCESS,
          TypesBooks.FETCH_BOOKS_ERROR
        )
      )

      dispatch(showLoading())
    }
  }

export const fetchSuccess =
  ({ dispatch }) =>
  (next) =>
  (action) => {
    next(action)

    if (action.type === TypesBooks.FETCH_BOOKS_SUCCESS) {
      dispatch(updateBooks(action.payload.items))
      dispatch(hideLoading())
    }
  }

export const fetchError =
  ({ dispatch }) =>
  (next) =>
  (action) => {
    next(action)

    if (action.type === TypesBooks.FETCH_BOOKS_Error) {
      dispatch(hideLoading())
    }
  }

const booksMdl = [fetchBooks, fetchSuccess, fetchError]
export default booksMdl
