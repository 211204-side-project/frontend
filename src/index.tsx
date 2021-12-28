import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { BrowserRouter } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import { SnackbarProvider } from 'notistack'
import { rootReducer } from './redux/modules'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

const store = createStore(rootReducer)

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <HelmetProvider>
        <SnackbarProvider
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
          }}
          autoHideDuration={2000}
        >
          <Provider store={store}>
            <App />
          </Provider>
        </SnackbarProvider>
      </HelmetProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
)
reportWebVitals()
