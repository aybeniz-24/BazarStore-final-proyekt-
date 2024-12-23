import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { useEffect } from 'react'
import { updateTitleAndFavicon } from './app.js'
import BasketContext from './components/context/BasketContext.jsx'
import FavoritContext from './components/context/FavoritContext.jsx'

const root = createRoot(document.getElementById('root'))

function FaviconAndTitle() {
  useEffect(() => {
    updateTitleAndFavicon() 
  }, [])

  return (
    <BrowserRouter>
        <BasketContext>
          <FavoritContext>
            <App />
          </FavoritContext>
        </BasketContext>
    </BrowserRouter>
  )
}

root.render(<FaviconAndTitle />)
