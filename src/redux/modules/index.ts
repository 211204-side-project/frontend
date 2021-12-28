import { combineReducers } from 'redux'
import { setUserReducer } from './user/set'
import { setIsLoggedInReducer } from './user/isLoggedIn'

export const rootReducer = combineReducers({
  setUserReducer,
  setIsLoggedInReducer,
})

export type RootState = ReturnType<typeof rootReducer>
