import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleWare from 'redux-saga'

import rootReducers from './ducks/rootReducer'
import rootSagas from './ducks/rootSagas'

const sagaMiddleware = createSagaMiddleWare()
const middlewares = [sagaMiddleware]

// dev tool
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
  rootReducers,
  composeEnhancers(applyMiddleware(...middlewares))
)

sagaMiddleware.run(rootSagas)

export default store
