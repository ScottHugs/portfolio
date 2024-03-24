import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from '@mui/material'
import CssBaseline from '@mui/material/CssBaseline'
import theme from '../src/utils/theme/index.js'
 
ReactDOM.createRoot(document.getElementById('root')).render( 
  
  <ThemeProvider theme={theme}> 
    <BrowserRouter>
      <CssBaseline />
      <App />
    </BrowserRouter>
  </ThemeProvider>
)
 
