import React from 'react'
import { Helmet } from 'react-helmet-async'
import MainComponent from '../components/MainComponent'
import Footer from './Footer'
import IntroComponent from '../components/IntroComponent'
import styled from 'styled-components'
import SelectSection from '../components/SelectSection'

const HomeSection = styled.section`
  height: 100vh;
  overflow-y: scroll;
  scroll-snap-type: y mandatory;
`

const Home = () => {
  return (
    <HomeSection>
      <Helmet>
        <title>Home | Lorem</title>
      </Helmet>
      <SelectSection />
      <IntroComponent />
      <MainComponent />
      <Footer />
    </HomeSection>
  )
}

export default Home
