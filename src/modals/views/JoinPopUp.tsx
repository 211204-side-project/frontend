import React, { useState } from 'react'
import { ModalCloseProps } from '../interface/closeBtn.interface'
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
  const [Login, setLogin] = useState<boolean>(true)
  const [SignUp, setSignUp] = useState<boolean>(false)

  const handleJoin = () => {
    if (!Login && SignUp) {
      setLogin(!Login)
      setSignUp(!SignUp)
    }
    if (Login && !SignUp) {
      setLogin(!Login)
      setSignUp(!SignUp)
    }
  }
  return (
    <JoinContainer>
      <Modal>
        <ModalTitle>Hello World!</ModalTitle>
        <ModalHeader>
          <SelectJoin
            onClick={handleJoin}
            className={Login ? 'active' : undefined}
          >
            Login
          </SelectJoin>
          <SelectJoin
            onClick={handleJoin}
            className={SignUp ? 'active' : undefined}
          >
            SigninUp
          </SelectJoin>
        </ModalHeader>
        <ModalContent></ModalContent>
        <ModalBottom>
          {Login ? (
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
