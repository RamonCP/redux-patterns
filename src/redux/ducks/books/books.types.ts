export const BooksTypesAction = {
  FETCH_BOOKS: '[BOOKS]: Init Fetch',
  FETCH_ONE_BOOK: '[BOOKS]: Init Fetch one Book',
  FETCH_ONE_BOOK_SUCCESS: '[BOOKS]: Fetch one Book Success',
  FETCH_BOOKS_SUCCESS: '[BOOKS]: Fetch Success',
  FETCH_BOOKS_ERROR: '[BOOKS]: Fetch Error',
  UPDATE_BOOKS: '[BOOKS]: Update',
  UPDATE_ACTUAL_BOOK: '[BOOKS]: Update Atual Book'
}

export type BookType = {
  kind: string
  id: string
  etag: string
  selfLink: string
  volumeInfo: {
    title: string
    authors: string[]
    publishedDate: string
    pageCount: number
    imageLinks: {
      smallThumbnail: string
      thumbnail: string
    }
  }
}

export type BooksType = {
  kind: string
  totalItems: number
  items: BookType[]
  actual: BookType
}

export type fetchBooksActionType = {
  type: string
  payload: {
    url: string
  }
}

export type fetchOneBookActionType = fetchBooksActionType
