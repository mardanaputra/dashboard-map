// File: src/components/ProductCard.jsx
import React from "react";
import { Link } from "react-router-dom";
import "./ProductCard.css";

// Komponen Pembantu untuk Menampilkan Bintang
const StarRatingDisplay = ({ rating }) => {
  const roundedRating = Math.round(rating);
  return (
    <div className="star-display-small">
      {'★'.repeat(roundedRating)}
      {'☆'.repeat(5 - roundedRating)}
    </div>
  );
};

// Komponen ProductCard sekarang menerima rating, ratingCount, dan onAddToCart
function ProductCard({ image, name, price, slug, rating, ratingCount, onAddToCart }) {
  // Tambahkan handler untuk tombol Add to Cart
  const handleAddToCartClick = (e) => {
    e.preventDefault(); // Mencegah navigasi ke detail produk saat mengklik tombol
    e.stopPropagation(); // Mencegah event menyebar
    onAddToCart(); // Panggil fungsi yang diterima dari DashboardContent
  };
  
  return (
    <div className="product-card">
      {/* Bungkus seluruh kartu dengan Link ke halaman detail */}
      <Link to={`/product/${slug}`} className="product-link">
        <img src={image} alt={name} className="product-image" />
        <div className="product-info">
          <h3 className="product-name">{name}</h3>
          <p className="product-price">{price}</p>
          
          {/* Bagian Rating Baru */}
          <div className="card-rating-section">
            <StarRatingDisplay rating={rating || 0} />
            <span className="rating-count-text">({ratingCount || 0})</span>
          </div>

          {/* Tombol Add to Cart Baru */}
          <button 
            onClick={handleAddToCartClick} 
            className="add-to-cart-card-btn"
          >
            Add to Cart
          </button>
          
          {/* Tombol "Lihat Detail" yang sudah ada, kini terbungkus di Link */}
          <span className="view-details-btn">
            View Product
          </span>

        </div>
      </Link>
    </div>
  );
}

export default ProductCard;
