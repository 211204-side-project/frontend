import React from 'react'
import { ModalCloseProps } from '../interface/closeBtn.interface'
import { JoinContainer, Modal, ModalButton } from '../styles/JoinPopUp.style'

const JoinPopUp: React.FC<ModalCloseProps> = ({ modalClose }) => {
  return (
    <JoinContainer>
      <Modal>
        <ModalButton onClick={modalClose}>X</ModalButton>
      </Modal>
    </JoinContainer>
  )
}

export default JoinPopUp
