import { TypesBooks, updateBooks, updateActualBook } from '../actions/books'
import { ApiRequest } from '../actions/api'
import { showLoading, hideLoading } from '../actions/loading'

const url = 'https://www.googleapis.com/books/v1/volumes'
const headers = {
  'Content-type': 'application/json; charset=UTF-8'
}

export const fetchBooksMdl =
  ({ dispatch }) =>
  (next) =>
  (action) => {
    next(action)

    if (action.type === TypesBooks.FETCH_BOOKS) {
      dispatch(
        ApiRequest(
          `${url}?q=react`,
          'GET',
          null,
          headers,
          TypesBooks.FETCH_BOOKS_SUCCESS,
          TypesBooks.FETCH_BOOKS_ERROR
        )
      )

      dispatch(showLoading())
    }

    if (action.type === TypesBooks.FETCH_ONE_BOOK) {
      dispatch(
        ApiRequest(
          `${url}/${action.payload.id}`,
          'GET',
          null,
          headers,
          TypesBooks.FETCH_ONE_BOOK_SUCCESS,
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

export const fetchOneBookSuccess =
  ({ dispatch }) =>
  (next) =>
  (action) => {
    next(action)

    if (action.type === TypesBooks.FETCH_ONE_BOOK_SUCCESS) {
      dispatch(updateActualBook(action.payload))
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

const booksMdl = [fetchBooksMdl, fetchSuccess, fetchOneBookSuccess, fetchError]
export default booksMdl
