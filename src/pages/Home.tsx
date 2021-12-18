import React from 'react'
import { Helmet } from 'react-helmet-async'
import MainComponent from '../components/MainComponent'
import Footer from './Footer'
import IntroComponent from '../components/IntroComponent'
import { HomeSection } from './styles/home.style'

const Home = () => {
  return (
    <HomeSection>
      <Helmet>
        <title>Home | Lorem</title>
      </Helmet>

      <IntroComponent />
      <MainComponent />
      <Footer />
    </HomeSection>
  )
}

export default Home
