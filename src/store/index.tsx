import {createStore} from 'redux'
import { persistStore } from 'redux-persist'

import rootReducers from './configs/root-reducer'
import {persistedReducers} from './configs/redux-persist'

const store = createStore(
  persistedReducers(rootReducers),
  (window as any)
    .__REDUX_DEVTOOLS_EXTENSION__ && 
    (window as any).__REDUX_DEVTOOLS_EXTENSION__()
)

export const persistor = persistStore(store);
export default store