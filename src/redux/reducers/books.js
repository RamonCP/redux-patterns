import { TypesBooks } from '../actions/books'

const initialState = []

export const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case TypesBooks.UPDATE_BOOKS: {
      return action.payload
    }

    default: {
      return state
    }
  }
}
