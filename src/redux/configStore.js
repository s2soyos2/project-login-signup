import { createStore, applyMiddleware } from 'redux'
import rootReducer from './reducer'
import createSagaMiddleware from 'redux-saga'
import storage from 'redux-persist/lib/storage'
import { persistStore, persistReducer } from 'redux-persist'

const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer.loginRedux)

export const sagaMiddleware = createSagaMiddleware()

export default () => {
  let store = createStore(persistedReducer, applyMiddleware(sagaMiddleware))
  let persistor = persistStore(store)
  return { store, persistor }
}