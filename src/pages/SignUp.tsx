import { Helmet } from 'react-helmet-async'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import FormError from '../components/errors/FormError'
import React, { useState } from 'react'
import styled from 'styled-components'
import {
  onSignUp,
  checkAccountId,
  checkPhoneNumber,
  checkNickname,
} from '../API/user'
import { User } from '../common/interfaces/user/user.interface'

type VerifyConvention = {
  [key: string]: boolean
}

interface UserAccount extends User {
  confirmPassword: string
}

const SignUp = () => {
  const navigator = useNavigate()
  const [verify, setVerify] = useState<VerifyConvention>({
    accountId: false,
    phoneNumber: false,
    nickname: false,
  })

  const {
    register,
    handleSubmit,
    getValues,
    watch,
    formState: { errors },
  } = useForm<UserAccount>({
    mode: 'onChange',
    defaultValues: {
      userImgUrl: null,
    },
  })

  const onSubmit = async () => {
    const verifySign = Object.keys(verify).every((key) => (verify[key] = true))

    if (verifySign) {
      const { accountId, password, phoneNumber, nickname } = getValues()
      const appendValues = {
        accountId,
        password,
        phoneNumber,
        nickname,
      }
      try {
        const { status, data } = await onSignUp(appendValues)
        if (status) {
          console.log(data)
          return
        }
      } catch (e) {
        console.log('e', e)
        return
      }
    }

    Object.keys(verify).forEach((key) => (verify[key] = false))
    return window.alert('Please check your verify fields')
  }

  const onCheckAccountId = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    const { accountId } = getValues()
    try {
      const { status, data } = await checkAccountId(accountId)
      status && !!data && setVerify({ ...verify, accountId: true })
    } catch (e) {
      console.log('e', e)
    }
  }

  const onCheckPhoneNumber = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    const { phoneNumber } = getValues()
    try {
      const { status, data } = await checkPhoneNumber(phoneNumber)
      status && !!data && setVerify({ ...verify, phoneNumber: true })
    } catch (e) {
      console.log('e', e)
    }
  }

  const onCheckNickname = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    const { nickname } = getValues()
    try {
      const { status, data } = await checkNickname(nickname)
      status && !!data && setVerify({ ...verify, nickname: true })
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
          {verify.accountId ? (
            'OK'
          ) : (
            <button onClick={onCheckAccountId}>Check</button>
          )}

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
            {...register('phoneNumber', {
              required: 'You must specify a phoneNumber',
              pattern: {
                value: /^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$/,
                message: 'Please insert a valid phoneNumber',
              },
            })}
            type="phoneNumber"
            name="phoneNumber"
            placeholder="Phone number, exclude '-'"
            autoComplete="off"
          />
          {verify.phoneNumber ? (
            'OK'
          ) : (
            <button onClick={onCheckPhoneNumber}>Check</button>
          )}

          {errors.phoneNumber && (
            <FormError errorMessage={errors.phoneNumber.message!} />
          )}
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
          {verify.nickname ? (
            'OK'
          ) : (
            <button onClick={onCheckNickname}>Check</button>
          )}
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
