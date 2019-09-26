import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import apiReducer from './api'
import mapReducer from './map'
import companyReducer from './company'
import loginReducer from './company'
import eventReducer from './event'
import aboutReducer from './about'
import favoriteReducer from './favorite'
import firstTimeReducer from './firstTime'

const rootPersistConfig = {
  key: 'root',
  storage,
  whitelist: ['api', 'favoriteReducer', 'firstTimeReducer']
}

const apiPersistConfig = {
  key: 'api',
  storage,
  whitelist: ['items', 'filters', 'maps', 'updated']
}

const rootReducer = combineReducers({
  apiReducer: persistReducer(apiPersistConfig, apiReducer),
  mapReducer,
  companyReducer,
  loginReducer,
  eventReducer,
  aboutReducer,
  favoriteReducer,
  firstTimeReducer
})

const persistedReducer = persistReducer(rootPersistConfig, rootReducer)

export default persistedReducer
