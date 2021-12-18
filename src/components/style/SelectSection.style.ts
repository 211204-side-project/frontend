import styled from 'styled-components'

const Nav = styled.nav`
  position: absolute;
  top: 50%;
  right: 5%;
  z-index: 1000;
`

const Li = styled.li`
  margin-top: 10px;
`

const Button = styled.button`
  width: 20px;
  height: 20px;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  &.current {
    background-color: blue;
  }
`

export { Nav, Li, Button }
