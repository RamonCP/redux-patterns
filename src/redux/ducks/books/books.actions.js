export const TypesBooks = {
  FETCH_BOOKS: '[BOOKS]: Init Fetch',
  FETCH_ONE_BOOK: '[BOOKS]: Init Fetch one Book',
  FETCH_ONE_BOOK_SUCCESS: '[BOOKS]: Fetch one Book Success',
  FETCH_BOOKS_SUCCESS: '[BOOKS]: Fetch Success',
  FETCH_BOOKS_ERROR: '[BOOKS]: Fetch Error',
  UPDATE_BOOKS: '[BOOKS]: Update',
  UPDATE_ACTUAL_BOOK: '[BOOKS]: Update Atual Book'
}

export const fetchBooks = (url) => ({
  type: TypesBooks.FETCH_BOOKS,
  payload: {
    url
  }
})

export const updateBooks = (payload) => ({
  type: TypesBooks.UPDATE_BOOKS,
  payload
})

export const updateActualBook = (payload) => ({
  type: TypesBooks.UPDATE_ACTUAL_BOOK,
  payload
})

export const fetchOneBook = (url) => ({
  type: TypesBooks.FETCH_ONE_BOOK,
  payload: {
    url
  }
})
