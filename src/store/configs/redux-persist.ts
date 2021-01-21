import storage from 'redux-persist/lib/storage'
import { persistReducer } from 'redux-persist'

export const persistedReducers = (reducers: any) => {
  const persistedReducers = persistReducer(
    {
      key: 'REACT-TODO',
      storage,
      whitelist: ['auth']
    },
    reducers
  )

  return persistedReducers
}
