import { User } from '../../../common/interfaces/user/user.interface'

type UserState = {
  me: Omit<User, 'password'>
}

const initialState: UserState = {
  me: {
    accountId: '',
    phoneNumber: '',
    nickname: '',
    userImgUrl: null,
  },
}

const SET_USER = 'SET_USER' as const

export const set = (user: Pick<UserState, 'me'>) => ({
  type: SET_USER,
  payload: user,
})

type SetUserAction = ReturnType<typeof set>

export const setUserReducer = (
  state: UserState = initialState,
  action: SetUserAction,
): UserState => {
  switch (action.type) {
    case 'SET_USER':
      return {
        me: action.payload.me,
      }
    default:
      return state
  }
}
