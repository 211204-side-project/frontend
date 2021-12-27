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
  ModalBottom,
  BottomSelect,
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
            Login
          </SelectJoin>
          <SelectJoin
            onClick={handleJoin}
            className={isSignUp ? 'active' : undefined}
          >
            SigninUp
          </SelectJoin>
        </ModalHeader>
        <ModalContent>{isLogin ? <SignIn /> : <SignUp />}</ModalContent>
        <ModalBottom>
          {isLogin ? (
            <BottomSelect>회원가입 하러가기</BottomSelect>
          ) : (
            <BottomSelect>로그인 하러가기</BottomSelect>
          )}
        </ModalBottom>
        <ModalButton onClick={modalClose}>X</ModalButton>
      </Modal>
    </JoinContainer>
  )
}

export default JoinPopUp
