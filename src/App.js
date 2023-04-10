import React, { useState } from "react";
import Header from "./components/Header/Header";
import Categories from "./components/Categories/Categories";
import Products from "./components/Products";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Food from "./components/Food";
import Accesories from "./components/Accesories";
import Dress from "./components/Dress";
import Sport from "./components/Sport";
import Entertainment from "./components/Entertainment";
import Technic from "./components/Technic";
import ProductPage from "./components/ProductPage";
import Banner from "./components/Banner/Banner";
import Section from "./components/products/Sections";
import Login from "./components/Login";
import Landing from "./components/Landing/Landing";

function App() {
  const [logedIn, setLogedIn] = useState(false);
  // var myHeaders = new Headers();
  // const token = localStorage.getItem('token')
  // myHeaders.append("Authorization", `Bearer ${token}`)
  
  // var requestOptions = {
  //   method: 'GET',
  //   headers: myHeaders,
  //   redirect: 'follow'
  // };
  
  // fetch("https://studenthunt.herokuapp.com/api/categories?populate=*", requestOptions)
  //   .then(response => response.json())
  //   .then(result => {
     
  //     console.log(result)
  //   })
  //   .catch(error => console.log('error', error));

  return (
    <div>



      <BrowserRouter>
      <Header logedIn={logedIn} setLogedIn={setLogedIn}/>
      <Routes>
      <Route index element={<Landing />} />
      <Route path='login' element={<Login logedIn={logedIn} setLogedIn={setLogedIn}/>} />

      <Route path='food' element={<Food />} />
      <Route path='accesories' element={<Accesories />} />
      <Route path='dress' element={<Dress />} />
      <Route path='sport' element={<Sport/>} />
      <Route path='entertainment' element={<Entertainment />} />
      <Route path='technic' element={<Technic />} />
      <Route path='accesories/:id' element={<ProductPage />} />
      <Route path='product/:id' element={<ProductPage />} />
      <Route path='dress/:id' element={<ProductPage />} />
      <Route path='sport/:id' element={<ProductPage />} />
      <Route path='entertainment/:id' element={<ProductPage />} />
      <Route path='technic/:id' element={<ProductPage />} />
      <Route path='food/:id' element={<ProductPage />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
