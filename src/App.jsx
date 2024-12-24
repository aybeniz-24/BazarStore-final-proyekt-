import { Route, Routes } from "react-router-dom"
import Header from "./components/header/Header"
import Footer from "./components/footer/Footer"
import Layout from "./components/layout/Layout"
import Main from "./components/main/Main"
import BasketPage from "./components/main/BasketPage"
import FavoritesPage from "./components/main/FavoritesPage"
import LoginPage from "./components/main/LoginPage"

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route index element={<Main />} />
        <Route path="/basket" element={<BasketPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/favorit" element={<FavoritesPage />} />
      </Routes>
      
      <Footer />



    
    </>

  )
}

export default App
