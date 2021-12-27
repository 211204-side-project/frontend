export interface SignInReq {
  accountId: string
  password: string
}

export interface SignInRes {
  object: {
    token: string
  }
  msg: string
}
