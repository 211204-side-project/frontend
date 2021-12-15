import axios from 'axios'
import { Helmet } from 'react-helmet-async'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import FormError from '../components/errors/FormError'
import { useState } from 'react'
import styled from 'styled-components'
import {
  checkVerifySign,
  checkAccountId,
  checkEmail,
  checkNickname,
} from '../API/user'

type VerifyConvention = {
  [key: string]: boolean
}

const SignUp = () => {
  const navigator = useNavigate()
  const [verify, setVerify] = useState<VerifyConvention>({
    accountId: false,
    email: false,
    nickname: false,
  })

  const {
    register,
    handleSubmit,
    getValues,
    watch,
    formState: { errors },
  } = useForm({
    mode: 'onChange',
  })

  const onSubmit = async () => {
    const verifySign = Object.keys(verify).every((key) => (verify[key] = true))

    if (verifySign) {
      const { accountId, password, email, nickname } = getValues()
      const appendValues = {
        accountId,
        password,
        email,
        nickname,
      }
      try {
        const { data } = await checkVerifySign(appendValues)
      } catch (e) {
        console.log('e', e)
      }
    }

    return window.alert('Please check your verify fields')
  }

  const onCheckAccountId = async () => {
    const { accountId } = getValues()
    try {
      const { data } = await checkAccountId(accountId)
    } catch (e) {
      console.log('e', e)
    }
  }

  const onCheckEmail = async () => {
    const { email } = getValues()
    try {
      const { data } = await checkEmail(email)
    } catch (e) {
      console.log('e', e)
    }
  }

  const onCheckNickname = async () => {
    const { nickname } = getValues()
    try {
      const { data } = await checkNickname(nickname)
    } catch (e) {
      console.log('e', e)
    }
  }

  return (
    <SignUpSection>
      <Helmet>
        <title>Create account</title>
      </Helmet>

      <h1>User Sign up!</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <input
            {...register('accountId', {
              required: 'You must specify a account id',
              pattern: {
                value: /^[A-za-z0-9]{4,15}$/,
                message: 'Please insert a valid account id',
              },
            })}
            type="text"
            name="accountId"
            placeholder="Account ID"
            autoComplete="off"
          />
          <button onClick={onCheckAccountId}>Check</button>
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
                message: 'Password must have at least 8 characters',
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
        <div>
          <input
            {...register('confirmPassword', {
              validate: (v) =>
                v === watch('password') || 'The passwords do not match',
            })}
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
          />
          {errors.confirmPassword?.message && (
            <FormError errorMessage={errors.confirmPassword.message} />
          )}
        </div>
        <div>
          <input
            {...register('email', {
              required: 'You must specify a email',
              pattern: {
                value: /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/,
                message: 'Please insert a valid email address',
              },
            })}
            type="email"
            name="email"
            placeholder="Email"
            autoComplete="off"
          />
          <button onClick={onCheckEmail}>Check</button>
          {errors.email && <FormError errorMessage={errors.email.message!} />}
        </div>
        <div>
          <input
            {...register('nickname', {
              required: 'You must specify a nickname',
              pattern: {
                value: /^[A-za-z0-9]{3,12}$/,
                message: 'Please insert a valid nickname',
              },
            })}
            type="text"
            name="nickname"
            placeholder="Nickname"
            autoComplete="off"
          />
          <button onClick={onCheckNickname}>Check</button>
          {errors.nickname && (
            <FormError errorMessage={errors.nickname.message!} />
          )}
        </div>

        <input role="button" type="submit" value="Sign up" />
      </form>
    </SignUpSection>
  )
}

const SignUpSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`

export default SignUp
