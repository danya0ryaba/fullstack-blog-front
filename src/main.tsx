import { createRoot } from 'react-dom/client'
import { ThemeProvider } from '@mui/material'
import CssBaseline from '@mui/material/CssBaseline'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
import { theme } from './theme.ts'
import { Provider } from 'react-redux'
import { store } from './redux/store.ts'

createRoot(document.getElementById('root')!).render(
  <>
    <CssBaseline />
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Provider store={store}>
          <App />
        </Provider>
      </BrowserRouter>
    </ThemeProvider>
  </>,
)
