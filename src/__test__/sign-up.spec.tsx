import { render, RenderResult, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
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

  it('should render validate fields', async () => {
    const { getByPlaceholderText, debug } = renderResult
    const accountId = getByPlaceholderText('Account ID')
    const password = getByPlaceholderText('Password')

    await waitFor(() => {
      userEvent.type(accountId, '1')
    })

    await waitFor(() => {
      userEvent.clear(accountId)
    })

    await waitFor(() => {
      userEvent.type(password, '1')
    })
    debug()

    await waitFor(() => {
      userEvent.clear(password)
    })
    debug()
  })
})
