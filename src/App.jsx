import { Route, Routes } from "react-router-dom"
import Header from "./components/header/Header"
import Footer from "./components/footer/Footer"
import Layout from "./components/layout/Layout"
import Main from "./components/main/Main"

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route index element={<Main />} />
        {/* <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} /> */}
      </Routes>
      
      <Footer />



    
    </>

  )
}

export default App
