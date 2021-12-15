import { render, RenderResult, waitFor } from '@testing-library/react'
import React from 'react'
import { HelmetProvider } from 'react-helmet-async'
import { BrowserRouter } from 'react-router-dom'
import SignUp from '../pages/SignUp'

describe('sign up', () => {
  let renderResult: RenderResult

  beforeEach(async () => {
    await waitFor(() => {
      renderResult = render(
        <BrowserRouter>
          <HelmetProvider>
            <SignUp />
          </HelmetProvider>
        </BrowserRouter>,
      )
    })
  })

  it('should render meta title', async () => {
    await waitFor(() => {
      expect(document.title).toBe('Create account')
    })
  })
})
