import React from 'react'
import MainModalContainer from '../modals/MainModal.container'
import { Content, Main, SubTitle, Title, Video } from './styles/home.style'

const Home = () => {
  return (
    <Main>
      <MainModalContainer />
      <Content>
        <Title>Lorem Ipsum</Title>
        <SubTitle>Lorem Ipsum content......</SubTitle>
      </Content>
      <Video autoPlay loop muted>
        <source src="assets/videos/eeee.mp4" type="video/mp4" />
      </Video>
    </Main>
  )
}

export default Home
