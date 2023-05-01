import React, { useState } from "react";
import './App.css'
import Header from "./components/Header/Header";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import ProductPage from "./components/ProductPage";
import Login from "./components/Login";
import Landing from "./components/Landing/Landing";
import Register from "./components/Register";
import Main from "./components/Main/Main";
function App() {
  const [logedIn, setLogedIn] = useState(false);
  return (
    <div className="app"> 
    <BrowserRouter>
      <Header logedIn={logedIn} setLogedIn={setLogedIn} />
      <Routes>
        <Route index element={<Landing />} />
        <Route path='login' element={<Login logedIn={logedIn} setLogedIn={setLogedIn} />} />
        <Route path='register' element={<Register logedIn={logedIn} setLogedIn={setLogedIn} />} />
        <Route path='categories/:id' element={<Main />} />
        <Route path='products/:id' element={<ProductPage />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
