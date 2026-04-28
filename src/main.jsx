import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { PersistGate } from 'redux-persist/integration/react'
import { Provider } from 'react-redux'
import { persistor, store } from './store/index'
import i18n from './i18n/i18n.js'
import { I18nextProvider } from 'react-i18next'

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <I18nextProvider i18n={i18n}>
          <App />
          </I18nextProvider>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  // </React.StrictMode>
)
