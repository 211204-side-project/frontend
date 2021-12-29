import Send from './interceptor'
import { User } from '../common/interfaces/user/user.interface'

enum Method {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  DELETE = 'DELETE',
}

const onSignUp = (sign: Omit<User, 'userImgUrl'>) => {
  return Send({
    method: Method.POST,
    url: 'user/signup',
    data: sign,
  })
}

const checkAccountId = (accountId: Pick<User, 'accountId'>) => {
  return Send({
    method: Method.POST,
    url: 'auth/accountId',
    data: accountId,
  })
}

const checkPhoneNumber = (phoneNumber: Pick<User, 'phoneNumber'>) => {
  return Send({
    method: Method.POST,
    url: 'auth/phoneNumber',
    data: phoneNumber,
  })
}

const checkNickname = (nickname: Pick<User, 'nickname'>) => {
  return Send({
    method: Method.POST,
    url: 'auth/nickname',
    data: nickname,
  })
}

const onSignIn = (sign: Pick<User, 'accountId' | 'password'>) => {
  return Send({
    method: Method.POST,
    url: '/user/signin',
    data: sign,
  })
}

export { onSignUp, checkAccountId, checkPhoneNumber, checkNickname, onSignIn }
