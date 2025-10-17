import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App'
import { AgentesDeResposta } from './pages/AgentesDeResposta'
import { AgentesDeAcao } from './pages/AgentesDeAcao'
import { PoliticaETermos } from './pages/PoliticaETermos'
import { ContactModalProvider } from './contexts/ContactModalContext'
import './index.css'

// Verificar se as variáveis de ambiente estão configuradas corretamente
if (import.meta.env.DEV) {
  const requiredEnvVars = ['VITE_WEB3FORMS_ACCESS_KEY'];
  const missingVars = requiredEnvVars.filter(varName => !import.meta.env[varName]);
  
  if (missingVars.length > 0) {
    console.warn(`⚠️ Variáveis de ambiente ausentes: ${missingVars.join(', ')}`);
    console.warn('Por favor, verifique seu arquivo .env e certifique-se de que as variáveis necessárias estão configuradas.');
  } else {
    console.log('✅ Todas as variáveis de ambiente necessárias estão configuradas.');
  }
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <ContactModalProvider>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/agentes-de-resposta" element={<AgentesDeResposta />} />
          <Route path="/agentes-de-acao" element={<AgentesDeAcao />} />
          <Route path="/politica-e-termos" element={<PoliticaETermos />} />
        </Routes>
      </ContactModalProvider>
    </BrowserRouter>
  </React.StrictMode>
) 