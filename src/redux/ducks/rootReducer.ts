import { combineReducers } from 'redux'
import { booksReducer } from './books/books.reducer'
import { loadingReducer } from './loading/loading.reducer'
import { cartReducer } from './cart/cart.reducer'
import { notifyReducer } from './notify/notify.reducer'

const rootReducers = combineReducers({
  books: booksReducer,
  loading: loadingReducer,
  cart: cartReducer,
  notify: notifyReducer
})

export default rootReducers
