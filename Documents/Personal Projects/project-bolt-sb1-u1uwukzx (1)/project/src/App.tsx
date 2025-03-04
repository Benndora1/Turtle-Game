import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import { AuthProvider } from './context/AuthContext';
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import { Menu }from './components/pages/Menu';
import {Contact} from './components/pages/Contact';
import Cart from './components/pages/Cart';
import Checkout from './components/pages/Checkout';
import Profile from './components/pages/Profile';
import{ Admin } from './components/pages/Admin/page';
import {Login} from './components/pages/Login';
import Register from './components/pages/Register';

const App = () => {
  return (
    <AuthProvider>
      <CartProvider>
        <Router>
          <div className="min-h-screen bg-gray-50">
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/menu" element={<Menu />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/profile/*" element={<Profile />} />
              <Route path="/admin/*" element={<Admin />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
            </Routes>
          </div>
        </Router>
      </CartProvider>
    </AuthProvider>
  );
};

export default App;