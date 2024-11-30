import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { useEffect } from 'react'
import { updateTitleAndFavicon } from './app.js'

const root = createRoot(document.getElementById('root'))

function FaviconAndTitle() {
  useEffect(() => {
    updateTitleAndFavicon() 
  }, [])

  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  )
}

root.render(<FaviconAndTitle />)
