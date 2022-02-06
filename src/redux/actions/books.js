export const TypesBooks = {
  BOOK_FETCH: '[BOOKS]: Init Fetch',
  FETCH_BOOKS_SUCCESS: '[BOOKS]: Fetch Success',
  FETCH_BOOKS_ERROR: '[BOOKS]: Fetch Error',
  UPDATE_BOOKS: '[BOOKS]: Update'
}

export const bookFetch = () => ({
  type: TypesBooks.BOOK_FETCH
})

export const updateBooks = (payload) => ({
  type: TypesBooks.UPDATE_BOOKS,
  payload
})
