import React from 'react'
import { Helmet } from 'react-helmet-async'
import { useForm } from 'react-hook-form'
import styled from 'styled-components'
import { onSignIn } from '../API/user'
import FormError from '../components/errors/FormError'
import { SignUpSection as SignInSection } from './SignUp'
import { User } from '../common/interfaces/user/user.interface'
import { useSnackbar } from 'notistack'
import {
  ACCESS_TOKEN,
  SUCCESS,
} from '../common/constants/successOrFalse.constants'
import { useDispatch } from 'react-redux'
import { setIsLoggedIN } from '../redux/modules/user/isLoggedIn'
import { ModalCloseProps } from '../modals/interface/closeBtn.interface'

const Button = styled.button`
  width: 100%;
`

const SignIn: React.FC<ModalCloseProps> = ({ modalClose }) => {
  const dispatch = useDispatch()

  const { enqueueSnackbar } = useSnackbar()

  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm<Pick<User, 'accountId' | 'password'>>({ mode: 'onChange' })

  const onSubmit = async () => {
    const { accountId, password } = getValues()

    if (accountId && password) {
      const appendValues = {
        accountId,
        password,
      }
      try {
        const { data } = await onSignIn(appendValues)
        console.log(data)
        const token = data.object.token
        saveToken(token)
        dispatch(setIsLoggedIN(token))
        enqueueSnackbar(SUCCESS)
        modalClose()
      } catch (err: any) {
        const response = err.response.data
        enqueueSnackbar(response.msg)
      }
    }
  }

  const onLogout = () => {
    removeToken()
  }

  const saveToken = (token: string) => {
    localStorage.setItem(ACCESS_TOKEN, token)
  }

  const removeToken = () => {
    localStorage.removeItem(ACCESS_TOKEN)
  }

  return (
    <SignInSection>
      <Helmet>
        <title>User sign in</title>
      </Helmet>
      <h1>User Sign in!</h1>
      <form onSubmit={handleSubmit(onSubmit)} method="POST">
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
            autoComplete="off"
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
