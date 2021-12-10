import React from 'react'
import { ModalCloseProps } from '../interface/closeBtn.interface'
import {
  Modal,
  ModalButton,
  ModalContainer,
  ModalContent,
  ModalTitle,
} from '../styles/main'

const HomePopUp: React.FC<ModalCloseProps> = ({ modalClose }) => {
  return (
    <ModalContainer>
      <Modal>
        <ModalTitle>Hello World!</ModalTitle>
        <ModalContent>Lorem Ipsum.. This is test modal</ModalContent>
        <ModalButton onClick={modalClose}>X</ModalButton>
      </Modal>
    </ModalContainer>
  )
}

export default HomePopUp
