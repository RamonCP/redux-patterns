import { Reducer } from 'redux'
import { BooksTypesAction, BooksType } from './books.types'

const initialState: BooksType = {
  kind: '',
  totalItems: 0,
  items: [],
  actual: {
    kind: '',
    id: '',
    etag: '',
    selfLink: '',
    volumeInfo: {
      title: '',
      subtitle: '',
      authors: [],
      publisher: '',
      publishedDate: '',
      description: '',
      pageCount: 0,
      categories: [],
      imageLinks: {
        smallThumbnail: '',
        thumbnail: '',
        small: '',
        medium: '',
        large: ''
      }
    }
  }
}

export const booksReducer: Reducer<BooksType> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case BooksTypesAction.UPDATE_BOOKS: {
      return {
        ...state,
        items: action.payload
      }
    }

    case BooksTypesAction.UPDATE_ACTUAL_BOOK: {
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
