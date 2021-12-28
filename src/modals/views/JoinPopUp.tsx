import React, { useState } from 'react'
import { ModalCloseProps } from '../interface/closeBtn.interface'
import SignIn from '../../pages/SignIn'
import SignUp from '../../pages/SignUp'
import {
  JoinContainer,
  Modal,
  ModalButton,
  ModalTitle,
  ModalHeader,
  SelectJoin,
  ModalContent,
} from '../styles/JoinPopUp.style'

const JoinPopUp: React.FC<ModalCloseProps> = ({ modalClose }) => {
  const [isLogin, setIsLogin] = useState<boolean>(true)
  const [isSignUp, setIsSignUp] = useState<boolean>(false)

  const handleJoin = () => {
    if (!isLogin && isSignUp) {
      setIsLogin(!isLogin)
      setIsSignUp(!isSignUp)
    }
    if (isLogin && !isSignUp) {
      setIsLogin(!isLogin)
      setIsSignUp(!isSignUp)
    }
  }
  return (
    <JoinContainer>
      <Modal>
        <ModalTitle>Hello World!</ModalTitle>
        <ModalHeader>
          <SelectJoin
            onClick={handleJoin}
            className={isLogin ? 'active' : undefined}
          >
            SIGN IN
          </SelectJoin>
          <SelectJoin
            onClick={handleJoin}
            className={isSignUp ? 'active' : undefined}
          >
            SIGN UP
          </SelectJoin>
        </ModalHeader>
        <ModalContent>
          {isLogin ? (
            <SignIn modalClose={modalClose} />
          ) : (
            <SignUp handleJoin={handleJoin} />
          )}
        </ModalContent>
        <ModalButton onClick={modalClose}>X</ModalButton>
      </Modal>
    </JoinContainer>
  )
}

export default JoinPopUp
