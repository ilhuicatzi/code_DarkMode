import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import {ThemeProvider } from "@/contexts/themeProvider.tsx"
import { BrowserRouter } from 'react-router-dom'
import '@fontsource-variable/onest';
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>,
)
