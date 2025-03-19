import React from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter, Routes, Route } from 'react-router-dom'
import App from './App'
import { AgentesInteligentes } from './pages/AgentesInteligentes'
import { ContactModalProvider } from './contexts/ContactModalContext'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter>
      <ContactModalProvider>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/agentes-inteligentes" element={<AgentesInteligentes />} />
        </Routes>
      </ContactModalProvider>
    </HashRouter>
  </React.StrictMode>
) 