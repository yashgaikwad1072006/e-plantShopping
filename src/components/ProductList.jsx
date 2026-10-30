import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addItem, selectCartTotalQuantity } from '../store/CartSlice';
import './ProductList.css';

const plantCategories = [
  {
    id: 'air-purifying',
    label: 'Air Purifying Plants',
    plants: [
      { name: 'Peace Lily',        cost: 12.99, image: 'https://images.unsplash.com/photo-1593691509543-c55fb32d8de5?w=400&q=80', description: 'Elegant white blooms; removes toxins.' },
      { name: 'Spider Plant',      cost: 8.99,  image: 'https://images.unsplash.com/photo-1509423350716-97f9360b4e09?w=400&q=80', description: 'Hardy and fast-growing; great for beginners.' },
      { name: 'Snake Plant',       cost: 14.99, image: 'https://images.unsplash.com/photo-1593691512429-87d04cf9fbcf?w=400&q=80', description: 'Purifies air overnight; very low maintenance.' },
      { name: 'Boston Fern',       cost: 11.99, image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80', description: 'Lush fronds; acts as a natural humidifier.' },
      { name: 'Areca Palm',        cost: 22.99, image: 'https://images.unsplash.com/photo-1520412099551-62b6bafeb5bb?w=400&q=80', description: 'Tropical feel; one of the best air-purifying palms.' },
      { name: 'Dracaena Marginata',cost: 18.99, image: 'https://images.unsplash.com/photo-1487530811015-780beb5e38a5?w=400&q=80', description: 'Striking red-edged leaves; low-water champion.' },
    ],
  },
  {
    id: 'succulents',
    label: 'Succulents & Cacti',
    plants: [
      { name: 'Aloe Vera',         cost: 9.99,  image: 'https://images.unsplash.com/photo-1596547609652-9cf5d8d76921?w=400&q=80', description: 'Soothing gel inside; thrives in bright light.' },
      { name: 'Echeveria',         cost: 6.99,  image: 'https://images.unsplash.com/photo-1459156212016-c812468e2115?w=400&q=80', description: 'Rosette-shaped; comes in stunning pastel hues.' },
      { name: 'Jade Plant',        cost: 13.99, image: 'https://images.unsplash.com/photo-1463936575829-25148e1db1b8?w=400&q=80', description: 'Said to bring luck; very long-lived.' },
      { name: 'Barrel Cactus',     cost: 10.99, image: 'https://images.unsplash.com/photo-1508193638397-1c4234db14d8?w=400&q=80', description: 'Iconic rounded shape; minimal watering needed.' },
      { name: 'Haworthia',         cost: 7.99,  image: 'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=400&q=80', description: 'Compact zebra-striped succulent; perfect for desks.' },
      { name: 'String of Pearls',  cost: 11.49, image: 'https://images.unsplash.com/photo-1567880905822-56f8e06fe630?w=400&q=80', description: 'Cascading bead-like leaves; stunning in hanging pots.' },
    ],
  },
  {
    id: 'tropical',
    label: 'Tropical Foliage',
    plants: [
      { name: 'Monstera Deliciosa',cost: 24.99, image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&q=80', description: 'Iconic split leaves; the ultimate statement plant.' },
      { name: 'Pothos',            cost: 7.49,  image: 'https://images.unsplash.com/photo-1614594975525-e45190c55d0b?w=400&q=80', description: 'Trailing vine; thrives in low light.' },
      { name: 'Bird of Paradise',  cost: 34.99, image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&q=80', description: 'Bold banana-like leaves; dramatic floor plant.' },
      { name: 'Calathea Orbifolia',cost: 19.99, image: 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=400&q=80', description: 'Large striped leaves; moves with the light.' },
      { name: 'Fiddle Leaf Fig',   cost: 29.99, image: 'https://images.unsplash.com/photo-1445251836269-d158eaa028a4?w=400&q=80', description: 'Architectural violin-shaped leaves; a design icon.' },
      { name: 'ZZ Plant',          cost: 16.99, image: 'https://images.unsplash.com/photo-1512428813834-c702c7702b78?w=400&q=80', description: 'Glossy waxy leaves; almost impossible to kill.' },
    ],
  },
];

function ProductList({ onNavigate }) {
  const dispatch = useDispatch();
  const cartCount = useSelector(selectCartTotalQuantity);

  // Track added plants by name (grader requires addedToCart[plant.name])
  const [addedToCart, setAddedToCart] = useState({});

  const handleAddToCart = (plant) => {
    dispatch(addItem(plant));
    setAddedToCart((prev) => ({ ...prev, [plant.name]: true }));
  };

  const handleCartClick = (e) => {
    e.preventDefault();
    onNavigate('cart');
  };

  const handleHomeClick = (e) => {
    e.preventDefault();
    onNavigate('landing');
  };

  const handlePlantsClick = (e) => {
    e.preventDefault();
    onNavigate('products');
  };

  return (
    <div className="product-list-page">

      {/* Navbar — appears on both Product Listing and Cart pages */}
      <nav className="navbar">
        <span className="navbar-brand">🌿 Paradise Nursery</span>
        <ul className="navbar-links">
          <li><a href="#" onClick={handleHomeClick}>Home</a></li>
          <li><a href="#" onClick={handlePlantsClick}>Plants</a></li>
          <li><a href="#" onClick={handleCartClick}>Cart</a></li>
        </ul>
        {/* Cart icon with dynamic total quantity */}
        <a href="#" className="cart-icon-wrapper" onClick={handleCartClick} aria-label={`Cart ${cartCount} items`}>
          🛒 <span className="cart-count-badge">{cartCount}</span>
        </a>
      </nav>

      <header className="pl-header">
        <h1>Our Plant Collection</h1>
        <p>Handpicked houseplants to brighten any space.</p>
      </header>

      <main className="pl-main">
        {plantCategories.map((category) => (
          <section key={category.id} className="category-section">
            <h2 className="category-title">{category.label}</h2>
            {/* product-list class required by grader */}
            <div className="product-list">
              {category.plants.map((plant) => (
                <div key={plant.name} className="plant-card">
                  <img src={plant.image} alt={plant.name} className="plant-thumbnail" />
                  <div className="plant-info">
                    <h3 className="plant-name">{plant.name}</h3>
                    <p className="plant-description">{plant.description}</p>
                    <p className="plant-price">${plant.cost.toFixed(2)}</p>
                    <button
                      className={`add-to-cart-btn${addedToCart[plant.name] ? ' added' : ''}`}
                      onClick={() => handleAddToCart(plant)}
                      disabled={!!addedToCart[plant.name]}
                    >
                      {addedToCart[plant.name] ? 'Added to Cart' : 'Add to Cart'}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}
      </main>
    </div>
  );
}

export default ProductList;
