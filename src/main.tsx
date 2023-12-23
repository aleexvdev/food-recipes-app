import React from 'react'
import ReactDOM from 'react-dom/client'
import './assets/styles/index.css'
import { RecipeApp } from './RecipeApp.tsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<RecipeApp />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
