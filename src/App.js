import React,{useState} from "react";
import Header from "./components/Header";
import Categories from "./components/Categories";
import Products from "./components/Products";
import {BrowserRouter,Routes,Route,Link} from 'react-router-dom'
import Food from "./components/Food";
import Accesories from "./components/Accesories";
import Dress from "./components/Dress";
import Sport from "./components/Sport";
import Entertainment from "./components/Entertainment";
import Technic from "./components/Technic";
import ProductPage from "./components/ProductPage";

function App() {
  const [showLogin, setShowLogin] = useState(false);
  return (
    <div className="App bg-bg-white w-full h-auto pb-8">
      <BrowserRouter>
      <Header showLogin={showLogin} setShowLogin={setShowLogin}/>
      <Categories />
      <Routes>
      <Route index element={<Products />} />
      <Route path='food' element={<Food />} />
      <Route path='accesories' element={<Accesories />} />
      <Route path='dress' element={<Dress />} />
      <Route path='sport' element={<Sport/>} />
      <Route path='entertainment' element={<Entertainment />} />
      <Route path='technic' element={<Technic />} />
      <Route path='accesories/:id' element={<ProductPage showLogin={showLogin} setShowLogin={setShowLogin}/>} />
      <Route path='dress/:id' element={<ProductPage showLogin={showLogin} setShowLogin={setShowLogin}/>} />
      <Route path='sport/:id' element={<ProductPage showLogin={showLogin} setShowLogin={setShowLogin}/>} />
      <Route path='entertainment/:id' element={<ProductPage showLogin={showLogin} setShowLogin={setShowLogin}/>} />
      <Route path='technic/:id' element={<ProductPage showLogin={showLogin} setShowLogin={setShowLogin}/>} />
      <Route path='food/:id' element={<ProductPage showLogin={showLogin} setShowLogin={setShowLogin}/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
