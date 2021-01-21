import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { persistStore } from 'redux-persist'
import { composeWithDevTools } from 'redux-devtools-extension'

import { rootReducer } from './configs/root-reducer'
import { rootSaga } from './configs/root-saga'
import { persistedReducers } from './configs/redux-persist'

const sagaMiddleware = createSagaMiddleware()

const store = createStore(
  persistedReducers(rootReducer),
  // applyMiddleware(sagaMiddleware),
  // composeWith
  // process.env.NODE_ENV === 'development' && getDevtoolsExtensionConfig()
  (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__()
    ? composeWithDevTools(applyMiddleware(sagaMiddleware))
    : compose(applyMiddleware(sagaMiddleware))
)

sagaMiddleware.run(rootSaga)

export const persistor = persistStore(store)
export default store
