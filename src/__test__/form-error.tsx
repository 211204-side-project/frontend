import React from 'react'
import { render } from '@testing-library/react'
import FormError from '../components/errors/FormError'

describe('form error', () => {
  it('should be render to form error', () => {
    const { debug, getByText } = render(<FormError errorMessage={'test'} />)
    getByText('test')
  })
})
