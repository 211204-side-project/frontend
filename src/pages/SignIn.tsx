import React, { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { useForm } from 'react-hook-form'
import styled from 'styled-components'
import { SignInReq } from './interface/signin.interface'
import { onSignIn } from '../API/user'
import FormError from '../components/errors/FormError'
import { SignUpSection as SignInSection } from './SignUp'

const Button = styled.button`
  width: 100%;
`

const SignIn = () => {
  const [state, setstate] = useState({
    accountId: '',
    password: '',
  })

  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm<SignInReq>({ mode: 'onChange' })

  const onSubmit = async () => {
    const { accountId, password } = getValues()

    if (accountId && password) {
      const appendValues = {
        accountId,
        password,
      }
      try {
        const { data } = await onSignIn(appendValues)
        saveToken(data.object.token)
      } catch (err: any) {
        const response = err.response.data
        alert(response.msg)
      }
    }
  }

  const onLogout = () => {
    removeToken()
  }

  const saveToken = (token: string) => {
    localStorage.setItem('access_token', token)
  }

  const removeToken = () => {
    localStorage.removeItem('access_token')
  }

  return (
    <SignInSection>
      <Helmet>
        <title>login!</title>
      </Helmet>
      <h1>User Sign in!</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <input
            {...register('accountId', {
              required: 'You must specify a user id',
              pattern: {
                value: /^[A-za-z0-9]{4,15}$/,
                message: 'Please insert a valid user id',
              },
            })}
            type="text"
            name="accountId"
            placeholder="User ID"
          />
          {errors.accountId && (
            <FormError errorMessage={errors.accountId.message!} />
          )}
        </div>
        <div>
          <input
            {...register('password', {
              required: 'You must specify a password',
              pattern: {
                value: /(?=.*\d)(?=.*[a-z]).{8,}/,
                message: 'Please insert a valid password',
              },
            })}
            type="password"
            name="password"
            placeholder="Password"
          />
          {errors.password && (
            <FormError errorMessage={errors.password.message!} />
          )}
        </div>
        <Button type="submit">Sign in</Button>
        <Button type="button" onClick={onLogout}>
          Logout
        </Button>
      </form>
    </SignInSection>
  )
}

export default SignIn
