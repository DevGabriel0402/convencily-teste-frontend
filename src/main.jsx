import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './pages/Home/index.jsx'

import GlobalStyles from './styles/GlobalStyles.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyles />
    <Home />
  </React.StrictMode>,
)
