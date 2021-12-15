import React from 'react'
import { NaviRouter, NaviSection, NaviTitle } from './styles/navigators.style'

const Navigators = () => {
  return (
    <NaviSection>
      <NaviTitle>
        <NaviRouter to="/">
          HOME<span>By LoremIpsum</span>
        </NaviRouter>
      </NaviTitle>
      <NaviRouter to="/">Lorem1</NaviRouter>
      <NaviRouter to="/">Lorem2</NaviRouter>
      <NaviRouter to="/">Lorem3</NaviRouter>
      <NaviRouter to="/">Lorem4</NaviRouter>
      <NaviRouter to="/create-account">Create Account</NaviRouter>
    </NaviSection>
  )
}

export default Navigators
