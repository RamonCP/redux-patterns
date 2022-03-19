import { createStore, applyMiddleware, compose, Store } from 'redux'
import createSagaMiddleWare from 'redux-saga'

import { BooksType } from './ducks/books/books.types'
import { CartTypes } from './ducks/cart/cart.types'
import { LoadingTypes } from './ducks/loading/loading.types'
import { NotifyTypes } from './ducks/notify/notify.types'

import rootReducers from './ducks/rootReducer'
import rootSagas from './ducks/rootSagas'

export type AplicationState = {
  books: BooksType
  cart: CartTypes
  loading: LoadingTypes
  notify: NotifyTypes
}

const sagaMiddleware = createSagaMiddleWare()
const middlewares = [sagaMiddleware]

// dev tool
const composeEnhancers =
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store: Store<AplicationState> = createStore(
  rootReducers,
  composeEnhancers(applyMiddleware(...middlewares))
)

sagaMiddleware.run(rootSagas)

export default store
