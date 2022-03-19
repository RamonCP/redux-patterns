import { BookType } from '../books/books.types'

export const CartTypesAction = {
  ADD_BOOK: '[CART]: book added',
  REMOVE_BOOK: '[CART]: book removed'
}

export type CartTypes = BookType[]
