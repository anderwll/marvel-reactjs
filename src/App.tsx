import React from 'react'
import { Provider } from 'react-redux'
import { ThemeProvider } from '@mui/material/styles'
import ThemeDefault from './config/theme/Default'

import AppRoutes from './routes/AppRoutes'

import store from './store/index'
import GlobalStyle from './config/GlobalStyles'

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={ThemeDefault}>
        <GlobalStyle />
        <AppRoutes />
      </ThemeProvider>
    </Provider>
  )
}

export default App
