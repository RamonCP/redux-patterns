import { combineReducers } from 'redux'
import { booksReducer } from '../reducers/books'
import { loadingReducer } from '../reducers/loading'

const rootReducers = combineReducers({
  books: booksReducer,
  loading: loadingReducer
})

export default rootReducers
