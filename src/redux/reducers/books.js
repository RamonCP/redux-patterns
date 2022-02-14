import { TypesBooks } from '../actions/books'

const initialState = []

export const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case TypesBooks.UPDATE_BOOKS: {
      return {
        ...state,
        items: action.payload
      }
    }

    case TypesBooks.UPDATE_ACTUAL_BOOK: {
      return {
        ...state,
        actual: action.payload
      }
    }

    default: {
      return state
    }
  }
}
