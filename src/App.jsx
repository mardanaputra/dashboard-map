// File: App.jsx
import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./app.css";
import Navbar from "./components/Navbar";
import DashboardContent from "./components/DashboardContent";
import Footer from "./components/Footer";
import ProductDetail from "./components/ProductDetail";
import ProductCart from "./components/ProductCart";
import Checkout from "./components/Checkout";
import initialProducts from "./utils/data"; // Import data produk awal

function App() {
  // Pindahkan data produk ke state. Tambahkan array reviews pada data awal jika perlu.
  const [products, setProducts] = useState(initialProducts.map(p => ({
    ...p,
    reviews: p.reviews || [] // Pastikan setiap produk memiliki array 'reviews' kosong
  })));
  const [cartItems, setCartItems] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const handleAddToCart = (product, quantity = 1) => {
    const existingItemIndex = cartItems.findIndex(item => item.id === product.id);
    if (existingItemIndex > -1) {
      const updatedCart = [...cartItems];
      updatedCart[existingItemIndex].quantity += quantity;
      setCartItems(updatedCart);
    } else {
      const newItem = { ...product, quantity: quantity };
      setCartItems([...cartItems, newItem]);
    }
  };

  const handleUpdateQuantity = (productId, newQuantity) => {
    const updatedCart = cartItems.map(item =>
      item.id === productId ? { ...item, quantity: newQuantity } : item
    );
    setCartItems(updatedCart.filter(item => item.quantity > 0));
  };

  const handleCheckoutItems = (itemsToCheckout) => {
    const itemIdsToCheckout = new Set(itemsToCheckout.map(item => item.id));
    const remainingItems = cartItems.filter(item => !itemIdsToCheckout.has(item.id));
    setCartItems(remainingItems);
  };
  
  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  // FUNGSI INI KINI MENERIMA reviewText
  const handleRateProduct = (productId, newRating, reviewText) => {
    setProducts(prevProducts => {
      return prevProducts.map(product => {
        if (product.id === productId) {
          
          // 1. Buat objek ulasan baru
          const newReview = {
            id: Date.now(), // ID ulasan unik
            rating: newRating,
            text: reviewText, // Simpan teks ulasan
            date: new Date().toLocaleDateString()
          };
          
          const updatedReviews = [...product.reviews, newReview];
          
          // 2. Hitung ulang rata-rata rating (hanya menggunakan rating dari semua ulasan)
          const totalRating = updatedReviews.reduce((sum, review) => sum + review.rating, 0);
          const newRatingCount = updatedReviews.length;
          const newAverage = totalRating / newRatingCount;

          return {
            ...product,
            rating: parseFloat(newAverage.toFixed(1)), // Simpan rata-rata baru
            ratingCount: newRatingCount, // Simpan jumlah ulasan baru
            reviews: updatedReviews // 3. Simpan array ulasan yang diperbarui
          };
        }
        return product;
      });
    });
  };

  const totalItemCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <div className="app">
      <Navbar cartItemCount={totalItemCount} searchTerm={searchTerm} onSearch={handleSearch} />
      <Routes>
        {/* Pastikan DashboardContent dan ProductDetail Menerima props 'products' dan 'onRateProduct' */}
        <Route path="/" element={<DashboardContent products={products} onAddToCart={handleAddToCart} onRateProduct={handleRateProduct} searchTerm={searchTerm} />} />
        <Route path="/product/:slug" element={<ProductDetail products={products} onAddToCart={handleAddToCart} onRateProduct={handleRateProduct} />} />
        <Route path="/cart" element={<ProductCart cartItems={cartItems} onUpdateQuantity={handleUpdateQuantity} />} />
        <Route path="/checkout" element={<Checkout cartItems={cartItems} onCheckoutItems={handleCheckoutItems} />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
