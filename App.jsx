import React, { useState } from 'react';
import './App.css';
import ProductList from './components/ProductList';
import CartItem from './components/CartItem';
import AboutUs from './components/AboutUs';

function App() {
  const [currentPage, setCurrentPage] = useState('landing');

  if (currentPage === 'landing') {
    return (
      <div className="background-image">
        <h1>Welcome to Paradise Nursery</h1>
        <p>Bring Nature Indoors — Beautiful Plants, Delivered to Your Door</p>
        <button
          className="get-started-button"
          onClick={() => setCurrentPage('products')}
        >
          Get Started
        </button>
      </div>
    );
  }

  return (
    <div className="app">
      {currentPage === 'products' && (
        <ProductList onNavigate={setCurrentPage} />
      )}
      {currentPage === 'cart' && (
        <CartItem onNavigate={setCurrentPage} />
      )}
      {currentPage === 'about' && (
        <>
          <nav className="navbar">
            <span className="navbar-brand">🌿 Paradise Nursery</span>
            <ul className="navbar-links">
              <li><a href="#" onClick={(e) => { e.preventDefault(); setCurrentPage('landing'); }}>Home</a></li>
              <li><a href="#" onClick={(e) => { e.preventDefault(); setCurrentPage('products'); }}>Plants</a></li>
              <li><a href="#" onClick={(e) => { e.preventDefault(); setCurrentPage('cart'); }}>Cart</a></li>
            </ul>
          </nav>
          <AboutUs />
        </>
      )}
    </div>
  );
}

export default App;
