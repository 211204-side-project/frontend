import React from 'react'
import MainModalContainer from '../modals/MainModal.container'
import {
  Content,
  Main,
  SubTitle,
  Title,
  VideoSection,
} from '../pages/styles/home.style'

const IntroComponent = () => {
  return (
    <Main>
      <MainModalContainer />
      <Content>
        <Title>Lorem Ipsum</Title>
        <SubTitle>Lorem Ipsum content......</SubTitle>
      </Content>
      {/* <VideoSection autoPlay loop muted>
        <source src="assets/videos/eeee.mp4" type="video/mp4" />
      </VideoSection> */}
      <img src="assets/images/cat.jpg"></img>
    </Main>
  )
}

export default IntroComponent
