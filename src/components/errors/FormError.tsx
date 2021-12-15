import React from 'react'

interface IFormErrorProps {
  errorMessage: string
}

const FormError: React.FC<IFormErrorProps> = ({ errorMessage }) => (
  <div>{errorMessage}</div>
)

export default FormError
