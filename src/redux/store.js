import { createStore, applyMiddleware, compose } from 'redux'
import booksMdl from './middlewares/books'
import cartMdl from './middlewares/cart'
import { api } from './middlewares/api'
import rootReducers from './reducers'

// dev tool
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
  rootReducers,
  composeEnhancers(applyMiddleware(...booksMdl, ...cartMdl, api))
)

export default store
