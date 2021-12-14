import React from 'react'
import { render } from '@testing-library/react'
import Footer from '../pages/Footer'

describe('footer', () => {
  it('should be render to footer', () => {
    const { debug } = render(<Footer />)
    debug()
  })
})
