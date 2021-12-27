import React from 'react'
import styled from 'styled-components'

interface IFormErrorProps {
  errorMessage: string
}

const Warning = styled.span`
  height: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 13px;
  color: red;
`

const FormError: React.FC<IFormErrorProps> = ({ errorMessage }) => (
  <Warning role="alert">{errorMessage}</Warning>
)

export default FormError
