import { Route, Routes, useLocation } from "react-router-dom";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Layout from "./components/layout/Layout";
import Main from "./components/main/Main";
import BasketPage from "./components/main/BasketPage";
import FavoritesPage from "./components/main/FavoritesPage";
import LoginPage from "./components/main/LoginPage";
import { useEffect, useState } from "react";

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
        <img src="/src/assets/loading/loading.gif" alt="Yüklənir" />
      </div>
    )
  }

 

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
  );
}

export default App;
