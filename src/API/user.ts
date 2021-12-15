import Send from './interceptor'

enum Method {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  DELETE = 'DELETE',
}

const checkVerifySign = (sign: object) => {
  return Send({
    method: Method.POST,
    url: '',
    data: sign,
  })
}

const checkAccountId = (accountId: string) => {
  return Send({
    method: Method.POST,
    url: '',
    data: { accountId },
  })
}

const checkEmail = (email: string) => {
  return Send({
    method: Method.POST,
    url: '',
    data: { email },
  })
}

const checkNickname = (nickname: string) => {
  return Send({
    method: Method.POST,
    url: '',
    data: { nickname },
  })
}

export { checkVerifySign, checkAccountId, checkEmail, checkNickname }
