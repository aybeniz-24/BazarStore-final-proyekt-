import { Route, Routes, useLocation } from "react-router-dom"
import Header from "./components/header/Header"
import Footer from "./components/footer/Footer"
import Layout from "./components/layout/Layout"
import Main from "./components/main/Main"
import { useEffect, useState } from "react"
import PageComponent from "./components/main/PageComponent"
import ProductSelect from "./components/main/ProductSelect"
import NotFound from "./components/main/NotFound"

function App() {
  const [loading, setLoading] = useState(false); 
  const location = useLocation(); 

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer); 
  }, [location]); 

  if (loading) {
    return (
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "white",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          zIndex: 9999,
        }}
      >
        <img src="https://bazarstore.az/cdn/shop/files/urek-qara.gif?v=1682603721" alt="Yüklənir" />
      </div>
    )
  }

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route index element={<Main />} />
        <Route path="/basket" element={<PageComponent />} />
        <Route path="/login" element={<PageComponent />} />
        <Route path="/choice" element={<PageComponent />} />
        <Route path="/favorit" element={<PageComponent />} />
        <Route path="/notFound" element={<NotFound />} />
        <Route path="/:catname/:subname/:subId" element={<ProductSelect />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
