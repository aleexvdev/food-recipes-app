import React from 'react'
import ReactDOM from 'react-dom/client'
import './assets/styles/index.css'
import { FoodApp } from './FoodApp.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <FoodApp />
  </React.StrictMode>,
)
