import styled from 'styled-components'

export const JoinContainer = styled.section`
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.3);
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
  position: relative;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 100;
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 980px) {
    width: 80%;
    height: 60%;
  }
`
export const ModalTitle = styled.div`
  display: flex;
  color: black;
  justify-content: center;
  align-items: center;
`

export const ModalHeader = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 0 5.5rem;
  @media screen and (max-width: 980px) {
    padding: 0 1rem;
  }
  .active {
    color: black;
    border-bottom: 1px solid black;
  }
`
export const SelectJoin = styled.p`
  width: 30%;
  text-align: center;
  &:hover {
    cursor: pointer;
    color: black;
    border-bottom: 1px solid black;
  }
`

export const ModalButton = styled.button`
  width: 35px;
  height: 35px;
  border-radius: 8px;
  outline: none;
  border: none;
  position: absolute;
  right: 0;

  cursor: pointer;
`
export const ModalContent = styled.div`
  width: 100%;
  height: 70%;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const ModalBottom = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
export const BottomSelect = styled.div`
  color: #377cff;
`
