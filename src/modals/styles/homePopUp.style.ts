import styled from 'styled-components'

export const ModalContainer = styled.section`
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 10;
  position: fixed;
  top: 0;
  left: 0;
`

export const Modal = styled.div`
  width: 50%;
  height: 50%;
  border-radius: 1rem;
  background-color: #fff;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 100;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const ModalButton = styled.button`
  width: 35px;
  height: 35px;
  border-radius: 8px;
  outline: none;
  border: none;
  position: relative;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  cursor: pointer;
`

export const ModalTitle = styled.div`
  font-size: 3rem;
  font-weight: bold;
`

export const ModalContent = styled.p`
  font-size: 2rem;
`
