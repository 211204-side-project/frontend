import { Helmet } from 'react-helmet-async'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import FormError from '../components/errors/FormError'
import React, { useState } from 'react'
import styled from 'styled-components'
import {
  checkAccountId,
  checkNickname,
  checkPhoneNumber,
  onSignUp,
} from '../API/user'
import { User } from '../common/interfaces/user/user.interface'
import { useSnackbar } from 'notistack'
import {
  ALREADY_TO_ID,
  ALREADY_TO_NICK,
  ALREADY_TO_PHONE,
  FILL_FIELD,
  INVALID_FORMAT,
  SUCCESS,
  VERIFY_FIELDS,
} from '../common/constants/successOrFalse.constants'

type VerifyConvention = {
  [key: string]: boolean
}

interface UserAccount extends User {
  confirmPassword: string
}

const SignUp = () => {
  const navigator = useNavigate()
  const { enqueueSnackbar } = useSnackbar()
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
    reset,
    formState: { errors },
  } = useForm<UserAccount>({
    mode: 'onChange',
    defaultValues: {
      userImgUrl: null,
    },
  })

  const onSubmit = async () => {
    if (!verify.accountId && !verify.phoneNumber && !verify.nickname)
      return enqueueSnackbar(VERIFY_FIELDS)

    const { accountId, password, phoneNumber, nickname } = getValues()
    const appendValues = {
      accountId,
      password,
      phoneNumber,
      nickname,
    }
    try {
      const { status, data } = await onSignUp(appendValues)
      if (status && data === true) {
        reset()
        return enqueueSnackbar(SUCCESS)
      }
    } catch (e: any) {
      return enqueueSnackbar(e.message)
    }

    Object.keys(verify).forEach((key) => (verify[key] = false))
  }

  const onCheckAccountId = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()

    const { accountId } = getValues()
    const regex = /^[A-za-z0-9]{4,15}$/
    const confirm = regex.test(accountId)

    if (!confirm) return enqueueSnackbar(INVALID_FORMAT)
    if (!accountId) return enqueueSnackbar(FILL_FIELD)

    const checkId: Pick<User, 'accountId'> = {
      accountId,
    }

    try {
      const { status, data } = await checkAccountId(checkId)

      if (status && data === true) {
        setVerify({ ...verify, accountId: true })
        return enqueueSnackbar(SUCCESS)
      } else if (status && data === false) {
        setVerify({ ...verify, accountId: false })
        return enqueueSnackbar(ALREADY_TO_ID)
      }

      return
    } catch (e: any) {
      return enqueueSnackbar(e.message)
    }
  }

  const onCheckPhoneNumber = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()

    const { phoneNumber } = getValues()
    const regex = /^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$/
    const confirm = regex.test(phoneNumber)

    if (!confirm) return enqueueSnackbar(INVALID_FORMAT)
    if (!phoneNumber) return enqueueSnackbar(FILL_FIELD)

    try {
      const checkPhone: Pick<User, 'phoneNumber'> = {
        phoneNumber,
      }
      const { status, data } = await checkPhoneNumber(checkPhone)

      if (status && data === true) {
        setVerify({ ...verify, phoneNumber: true })
        return enqueueSnackbar(SUCCESS)
      } else if (status && data === false) {
        setVerify({ ...verify, phoneNumber: false })
        return enqueueSnackbar(ALREADY_TO_PHONE)
      }

      return
    } catch (e: any) {
      return enqueueSnackbar(e.message)
    }
  }

  const onCheckNickname = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()

    const { nickname } = getValues()
    const regex = /^[A-za-z0-9]{3,12}$/
    const confirm = regex.test(nickname)

    if (!confirm) return enqueueSnackbar(INVALID_FORMAT)
    if (!nickname) return enqueueSnackbar(FILL_FIELD)

    try {
      const checkNick: Pick<User, 'nickname'> = {
        nickname,
      }
      const { status, data } = await checkNickname(checkNick)

      if (status && data === true) {
        setVerify({ ...verify, nickname: true })
        return enqueueSnackbar(SUCCESS)
      } else if (status && data === false) {
        setVerify({ ...verify, nickname: false })
        return enqueueSnackbar(ALREADY_TO_NICK)
      }

      return
    } catch (e: any) {
      return enqueueSnackbar(e.message)
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
            placeholder="Account ID (4~15 char)"
            autoComplete="off"
            disabled={verify.accountId}
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
            placeholder="Password (least 8 char)"
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
            placeholder="Phone number (exclude '-')"
            autoComplete="off"
            disabled={verify.phoneNumber}
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
            placeholder="Nickname (3~12 char)"
            autoComplete="off"
            disabled={verify.nickname}
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
