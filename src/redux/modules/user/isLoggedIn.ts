import { ACCESS_TOKEN } from '../../../common/constants/successOrFalse.constants'

type isLoggedInState = {
  isLoggedIn: boolean
}

const token = window.localStorage.getItem(ACCESS_TOKEN)

const initialState: isLoggedInState = {
  isLoggedIn: !!token,
}

const SET_IS_LOGGED_IN = 'SET_IS_LOGGED_IN' as const

export const set = (token: string) => ({
  type: SET_IS_LOGGED_IN,
  payload: token,
})

type SetIsLoggedInAction = ReturnType<typeof set>

export const setIsLoggedInReducer = (
  state: isLoggedInState = initialState,
  action: SetIsLoggedInAction,
): isLoggedInState => {
  switch (action.type) {
    case 'SET_IS_LOGGED_IN':
      return {
        isLoggedIn: !!action.payload,
      }

    default:
      return state
  }
}
