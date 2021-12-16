import { render } from '@testing-library/react'
import React from 'react'
import { HelmetProvider } from 'react-helmet-async'
import { BrowserRouter } from 'react-router-dom'
import App from '../App'

describe('app render', () => {
  it('should ', () => {
    const { debug } = render(
      <BrowserRouter>
        <HelmetProvider>
          <App />
        </HelmetProvider>
      </BrowserRouter>,
    )
  })
})
