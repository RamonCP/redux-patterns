import { combineReducers } from 'redux'
import { booksReducer } from '../reducers/books'
import { loadingReducer } from '../reducers/loading'
import { cartReducer } from '../reducers/cart'
import { notifyReducer } from '../reducers/notify'

const rootReducers = combineReducers({
  books: booksReducer,
  loading: loadingReducer,
  cart: cartReducer,
  notify: notifyReducer
})

export default rootReducers
