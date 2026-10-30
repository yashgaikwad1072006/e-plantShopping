# e-plantShopping

## Project Name: e-plantShopping — Paradise Nursery

A fully functional React + Redux e-commerce shopping cart application for an online plant shop called Paradise Nursery.

## Project Description

Paradise Nursery is an online plant shop where users can browse a wide variety of houseplants, add them to a shopping cart, manage quantities, and proceed to checkout. The application demonstrates modern React development practices including component-based architecture, Redux state management, and responsive CSS design.

## Features

- **Landing Page** – Company name "Welcome to Paradise Nursery" and a "Get Started" button
- **Product Listing** – Browse 18+ unique houseplants grouped into 3 categories
- **Add to Cart** – Add plants to cart; button disables after adding
- **Cart Icon** – Live count of items in the cart shown in the navbar
- **Shopping Cart Page** – Full cart with thumbnails, names, prices, quantity controls, delete, and checkout
- **Continue Shopping** – Navigate back from cart to the product listing
- **About Us Page** – Company background and mission

## Tech Stack

- React 18
- Redux Toolkit
- Vite
- CSS3

## Getting Started

```bash
npm install
npm run dev
```

## Project Structure

```
e-plantShopping/
├── public/
├── src/
│   ├── components/
│   │   ├── AboutUs.jsx
│   │   ├── CartItem.jsx
│   │   └── ProductList.jsx
│   ├── store/
│   │   ├── CartSlice.jsx
│   │   └── store.js
│   ├── App.css
│   ├── App.jsx
│   └── main.jsx
├── README.md
└── package.json
```

## Author

Built as part of the IBM Full Stack Software Developer Certificate on Coursera.
