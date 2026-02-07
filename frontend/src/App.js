
import './App.css';
import Navbar from './components/Navbar/Navbar';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import React from 'react';
import Shop from './pages/Shop';
import ShopCategory from './pages/ShopCategory';
import Cart from './pages/Cart';
import LoginSignup from './pages/LoginSignup';
import Product from './pages/Product';
//import Footer from './components/Footer/Footer';
import women_banner from './components/assets/women_banner.jpg';
import men_banner from './components/assets/men_banner.jpg';
import kids_banner from './components/assets/kid_banner.jpg';
//import ShopContextProvider from './context/ShopContext';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Shop/>}/>
          <Route path='/womens' element={<ShopCategory banner={women_banner} category='women'/>}/>
          <Route path='/mens' element={<ShopCategory banner={men_banner} category='men'/>}/>
          <Route path='/kids' element={<ShopCategory banner={kids_banner} category='kid'/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/product' element={<Product/>}>
              <Route path='/product/:id' element={<Product/>}/>
          </Route>
          <Route path='/login' element={<LoginSignup/>}/>      
        </Routes>
        {/* <Footer /> */}
       
      </BrowserRouter>
      
    </div>
  );
}

export default App;
