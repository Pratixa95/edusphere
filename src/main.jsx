import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'

// ✅ Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css'

// ✅ Bootstrap JS (THIS FIXES TOGGLER)
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
)
