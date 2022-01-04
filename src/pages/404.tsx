import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import styled from 'styled-components'

export const NotFoundPageSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`

export const Title = styled.h1`
  padding: 1rem;
  font-size: 2rem;
  font-weight: bold;
`

export const GoToPageClick = styled.span`
  cursor: pointer;
  color: #3d70cb;
`

const NotFoundPage = () => {
  const navi = useNavigate()
  const params = useParams()

  const goToHome = () => {
    navi('/')
  }

  return (
    <NotFoundPageSection>
      <Title>Not found this page {`.../${params['*']}`}</Title>
      <div>
        <GoToPageClick onClick={goToHome}> Go to home</GoToPageClick>
      </div>
    </NotFoundPageSection>
  )
}

export default NotFoundPage
