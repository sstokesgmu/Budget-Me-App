import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <h1>Hello To The Landing </h1>
    <h2>Using Three.js/Fiber and ReCharts</h2>
  </StrictMode>
)
