import React from 'react'
import {
  Content,
  Main,
  SubTitle,
  Title,
  VideoSection,
} from '../pages/styles/home.style'

const IntroComponent = () => {
  return (
    <Main className="section-1">
      <Content>
        <Title>Lorem Ipsum</Title>
        <SubTitle>Lorem Ipsum content......</SubTitle>
      </Content>
      <VideoSection autoPlay loop muted>
        <source src="assets/videos/eeee.webm" type="video/webm" />
      </VideoSection>
    </Main>
  )
}

export default IntroComponent
