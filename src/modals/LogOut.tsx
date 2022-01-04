import React from 'react'
import { ACCESS_TOKEN } from '../common/constants/successOrFalse.constants'
import styled from 'styled-components'

export const LogOutSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`

interface OnLogOutModalProp {
  onLogOutModal: () => void
}

const LogOut: React.FC<OnLogOutModalProp> = ({ onLogOutModal }) => {
  const removeToken = () => {
    localStorage.removeItem(ACCESS_TOKEN)
  }

  const onLogout = () => {
    removeToken()
    window.location.href = '/'
  }

  const onCancel = () => {
    onLogOutModal()
  }

  return (
    <LogOutSection>
      <div>
        <h1>Confirm Log out!</h1>
      </div>
      <div>
        <button onClick={onLogout}>
          <span>Log out</span>
        </button>
        <button onClick={onCancel}>
          <span>Cancel</span>
        </button>
      </div>
    </LogOutSection>
  )
}

export default LogOut
