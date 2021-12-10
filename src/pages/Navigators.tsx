import React from 'react'
import Search from '../components/header/Search'
import GoHome from '../components/header/GoHome'
import LoggedIn from '../components/header/LoggedIn'
import { NaviSection } from './styles/navigators.style'

const Navigators = () => {
  return (
    <NaviSection>
      <GoHome />
      <Search />
      <LoggedIn />
    </NaviSection>
  )
}

export default Navigators
