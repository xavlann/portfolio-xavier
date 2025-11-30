import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './styles/index.css'

// Vérification que l'élément root existe
const rootElement = document.getElementById('root')
if (!rootElement) {
  console.error('Élément root non trouvé!')
}

try {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  )
} catch (error) {
  console.error('Erreur lors du rendu:', error)
  // Afficher un message d'erreur dans la page
  if (rootElement) {
    rootElement.innerHTML = `
      <div style="padding: 20px; color: red;">
        <h1>Erreur de rendu</h1>
        <p>${error.message}</p>
        <pre>${error.stack}</pre>
      </div>
    `
  }
}

