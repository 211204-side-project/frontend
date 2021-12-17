import React from 'react'
import { Helmet } from 'react-helmet-async'
import MainComponent from '../components/MainComponent'
import Footer from './Footer'
import IntroComponent from '../components/IntroComponent'

const Home = () => {
  return (
    <React.Fragment>
      <Helmet>
        <title>Home | Lorem</title>
      </Helmet>

      <IntroComponent />
      <MainComponent />
      <Footer />
    </React.Fragment>
  )
}

export default Home
