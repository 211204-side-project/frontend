import React from 'react'
import { NaviRouter, NaviSection, NaviTitle } from './styles/navigators.style'
import { OnClickJoin } from '../modals/interface/joinBtn.interface'
import JoinPopUp from '../modals/views/JoinPopUp'
const Navigators: React.FC<OnClickJoin> = ({ modalClose, IsLogin }) => {
  return (
    <NaviSection>
      <NaviTitle>
        <NaviRouter to="/">
          HOME<span>By LoremIpsum</span>
        </NaviRouter>
      </NaviTitle>
      <NaviRouter to="/">Lorem1</NaviRouter>
      <NaviRouter to="/">Lorem2</NaviRouter>
      <NaviRouter to="/usercontoller">Lorem3</NaviRouter>
      <NaviRouter to="/" onClick={modalClose}>
        Join
      </NaviRouter>
      {IsLogin && <JoinPopUp modalClose={modalClose} />}
    </NaviSection>
  )
}

export default Navigators
