// File: ProductDetail.jsx
import React, { useState } from 'react'; // Import useState
import { useParams, useNavigate } from 'react-router-dom';
import './ProductDetail.css';

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

// ProductDetail sekarang menerima products, onAddToCart, dan onRateProduct
function ProductDetail({ products, onAddToCart, onRateProduct }) {
  const { slug } = useParams();
  const navigate = useNavigate();

  // Cari produk dari daftar products yang diterima sebagai prop
  const product = products.find(p => p.slug === slug);

  // State lokal untuk rating dan ulasan
  const [userRating, setUserRating] = useState(0);
  const [reviewText, setReviewText] = useState(''); // State baru untuk ulasan

  if (!product) {
    return <h2>Product not found!</h2>;
  }

  // Hitung rata-rata rating (Pastikan product memiliki default rating)
  const averageRating = product.rating || 0;
  const ratingCount = product.ratingCount || 0;
  // Ambil daftar ulasan
  const reviews = product.reviews || [];

  // Handler untuk mengirim rating dan ulasan
  const handleRateSubmit = () => {
    if (userRating > 0) {
      // Kirim rating dan TEKS ULASAN
      onRateProduct(product.id, userRating, reviewText);
      // Reset form
      setUserRating(0);
      setReviewText('');
      // Ganti alert dengan modal kustom di aplikasi sungguhan
      console.log('Rating dan ulasan terkirim!'); 
    } else {
      console.log('Mohon berikan bintang rating terlebih dahulu.');
    }
  };

  const handleViewCart = () => {
    navigate('/cart');
  };

  // Fungsi BARU untuk navigasi kembali ke Dashboard (home)
  const handleBackToDashboard = () => {
    navigate('/');
  };

  return (
    <div className="product-detail-container">

      {/* Tombol Kembali ke Dashboard dipindahkan ke atas */}
      <button 
        onClick={handleBackToDashboard} 
        className="back-to-dashboard-btn"
        aria-label="← "
      >
      Back to Dashboard
      </button>

      <h1>{product.name}</h1>
      <img src={product.image} alt={product.name} className="product-image-detail" />
      <p className="product-price-detail">Price: {product.price}</p>
      
      <div
  className="product-description text-black text-base leading-relaxed font-normal"
  dangerouslySetInnerHTML={{ __html: product.description }}
/>




      {/* Tampilan Rating Rata-rata */}
      <div className="product-rating-display">
        <div className="star-display">
          <StarRatingDisplay rating={averageRating} />
        </div>
        <p>({averageRating.toFixed(1)} out {ratingCount} review)</p>
      </div>

      <div className="button-group">
        {/* Tombol Kembali ke Dashboard telah dipindahkan ke atas */}
        <button onClick={() => onAddToCart(product)} className="add-to-cart-btn">
          Add to Cart
        </button>
        <button onClick={handleViewCart} className="view-cart-btn">
          View Cart
        </button>
      </div>

      {/* Form Input Rating dan Ulasan */}
      <div className="rating-form">
        <h4>Rate and Write Your Review</h4>
        <div className="star-rating">
          {[1, 2, 3, 4, 5].map((star) => (
            <span
              key={star}
              className={`star ${star <= userRating ? 'selected' : ''}`}
              onClick={() => setUserRating(star)}
            >
              ★
            </span>
          ))}
        </div>

        {/* INPUT ULASAN BARU */}
        <textarea
          className="review-textarea"
          rows="4"
          placeholder="Write your review here (optional)..."
          value={reviewText}
          onChange={(e) => setReviewText(e.target.value)}
        ></textarea>

        <button 
          onClick={handleRateSubmit} 
          className="submit-rating-btn"
          disabled={userRating === 0}
        >
          Submit Ratings & Reviews
        </button>
      </div>

      {/* Bagian Daftar Ulasan BARU */}
      <div className="review-list-container">
        <h2>Review ({reviews.length})</h2>
        {reviews.length === 0 ? (
          <p className="no-reviews">There are no reviews for this product yet.</p>
        ) : (
          <div className="reviews-wrapper">
            {reviews.slice().reverse().map((review) => ( // Menampilkan yang terbaru di atas
              <div key={review.id} className="review-card">
                <div className="review-header">
                  {/* Menggunakan "Pengirim" sebagai placeholder username */}
                  <span className="review-username">User </span> 
                  <span className="review-date">{review.date}</span>
                </div>
                <StarRatingDisplay rating={review.rating} />
                {review.text && <p className="review-text">{review.text}</p>}
              </div>
            ))}
          </div>
        )}
      </div>
      
    </div>
  );
}

export default ProductDetail;