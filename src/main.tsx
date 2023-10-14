import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App.tsx'
import './index.css'
import { ThemeProvider } from './ui-kit/theme/theme-provider.tsx'
import { GlobalStyles } from './ui-kit/theme/global-styles.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <ThemeProvider>
            <GlobalStyles />
            <App />
        </ThemeProvider>
    </React.StrictMode>
)
