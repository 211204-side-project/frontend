import React from 'react'
import MainModalContainer from '../modals/MainModal.container'
import { Content, Main, SubTitle, Title, Video } from './styles/home.style'
import BasicVideo from '../assets/videos/eeee.mp4'

const Home = () => {
  return (
    <Main>
      <MainModalContainer />
      <Content>
        <Title>Lorem Ipsum</Title>
        <SubTitle>Lorem Ipsum content......</SubTitle>
      </Content>
      <Video autoPlay loop muted>
        <source src={BasicVideo} type="video/mp4" />
      </Video>
    </Main>
  )
}

export default Home
