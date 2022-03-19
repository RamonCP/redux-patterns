import { CartTypesAction } from './cart.types'
import { BookType } from '../books/books.types'

export const AddBook = (book: BookType) => ({
  type: CartTypesAction.ADD_BOOK,
  payload: book
})

export const RemoveBook = (id: string) => ({
  type: CartTypesAction.REMOVE_BOOK,
  payload: id
})
