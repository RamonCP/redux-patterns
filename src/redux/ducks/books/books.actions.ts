import { BooksTypesAction, BooksType, BookType } from './books.types'

export const fetchBooks = (url: string) => ({
  type: BooksTypesAction.FETCH_BOOKS,
  payload: {
    url
  }
})

export const updateBooks = (payload: BooksType) => ({
  type: BooksTypesAction.UPDATE_BOOKS,
  payload
})

export const updateActualBook = (payload: BookType) => ({
  type: BooksTypesAction.UPDATE_ACTUAL_BOOK,
  payload
})

export const fetchOneBook = (url: string) => ({
  type: BooksTypesAction.FETCH_ONE_BOOK,
  payload: {
    url
  }
})
