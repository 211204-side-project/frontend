import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const NaviSection = styled.section`
  color: rgb(192, 197, 201);
  cursor: default;
  height: 3.25em;
  left: 0px;
  line-height: 3.25em;
  position: fixed;
  text-align: right;
  top: 0px;
  width: 100%;
  z-index: 10001;
  background: rgba(4, 22, 37, 0.75);
`

export const NaviTitle = styled.title`
  color: rgb(255, 255, 255);
  display: inline-block;
  height: inherit;
  left: 1.25em;
  line-height: inherit;
  position: absolute;
  top: 0px;
  margin: 0px;
  padding: 0px;
`

export const NaviRouter = styled(Link)`
  color: inherit;
  text-decoration: none;
  ont-size: 1.25em;
  transition: color 0.2s ease-in-out 0s;
  margin-right: 1rem;
`
