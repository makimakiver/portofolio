import React from 'react'
import ReactDOM from "react-dom/client";
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Theme } from "@radix-ui/themes";
import "@radix-ui/themes/styles.css";
// import './index.css'
import App from './App.jsx'
import { ThemeProvider } from './ThemeProvider.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
      <ThemeProvider>
          <App />
      </ThemeProvider>
  </StrictMode>,
)
