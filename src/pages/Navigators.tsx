import React from 'react'
import { NaviRouter, NaviSection, NaviTitle } from './styles/navigators.style'
import { OnClickJoin } from '../modals/interface/joinBtn.interface'
import JoinPopUp from '../modals/views/JoinPopUp'
import { RootState } from '../redux/modules'
import { useSelector } from 'react-redux'
const Navigators: React.FC<OnClickJoin> = ({ modalClose, IsLogin }) => {
  const { token } = useSelector((state: RootState) => ({
    token: state.setIsLoggedInReducer.isLoggedIn,
  }))

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
      {token ? (
        <NaviRouter to="/">Profile</NaviRouter>
      ) : (
        <NaviRouter to="/" onClick={modalClose}>
          Join
        </NaviRouter>
      )}

      {IsLogin && <JoinPopUp modalClose={modalClose} />}
    </NaviSection>
  )
}

export default Navigators
