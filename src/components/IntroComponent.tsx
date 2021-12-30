import React from 'react'
import { useSelector } from 'react-redux'
import { Main } from '../pages/styles/home.style'
import { RootState } from '../redux/modules'
import styled from 'styled-components'

const TestH1 = styled.h1`
  font-size: 48px;
  font-weight: bold;
`

const IntroComponent = () => {
  const { token, me } = useSelector((state: RootState) => ({
    token: state.setIsLoggedInReducer.isLoggedIn,
    me: state.setUserReducer.me,
  }))

  return (
    <Main className="section-1">
      {token ? (
        <TestH1>Hello {me.nickname}</TestH1>
      ) : (
        <TestH1>Please Login!</TestH1>
      )}
    </Main>
  )
}

export default IntroComponent
