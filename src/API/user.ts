import Send from './interceptor'

enum Method {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  DELETE = 'DELETE',
}

const onSignUp = (sign: object) => {
  return Send({
    method: Method.POST,
    url: 'user/signup',
    data: JSON.stringify(sign),
  })
}

const checkAccountId = (accountId: string) => {
  return Send({
    method: Method.POST,
    url: 'auth/accountId',
    data: JSON.stringify(accountId),
  })
}

const checkPhoneNumber = (email: string) => {
  return Send({
    method: Method.POST,
    url: 'auth/phoneNumber',
    data: JSON.stringify(email),
  })
}

const checkNickname = (nickname: string) => {
  return Send({
    method: Method.POST,
    url: 'auth/nickname',
    data: JSON.stringify(nickname),
  })
}

export { onSignUp, checkAccountId, checkPhoneNumber, checkNickname }
