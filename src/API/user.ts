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

const checkAccountId = (checkId: string) => {
  return Send({
    method: Method.POST,
    url: 'auth/accountId',
    data: checkId,
  })
}

const checkPhoneNumber = (email: string) => {
  return Send({
    method: Method.POST,
    url: 'auth/phoneNumber',
    data: email,
  })
}

const checkNickname = (nickname: string) => {
  return Send({
    method: Method.POST,
    url: 'auth/nickname',
    data: nickname,
  })
}

export { onSignUp, checkAccountId, checkPhoneNumber, checkNickname }
