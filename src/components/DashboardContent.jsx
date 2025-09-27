// File: DashboardContent.jsx
import React from "react";
// HAPUS import products from "../utils/data";
import ProductCard from "./ProductCard";
import "./DashboardContent.css";

// DashboardContent sekarang Menerima products (dari state App.jsx), onAddToCart, dan searchTerm
function DashboardContent({ products, onAddToCart, searchTerm, onRateProduct }) { 
  // Catatan: onRateProduct sebenarnya tidak digunakan di sini, tapi di-pass down dari App.jsx
  // Jika App.jsx meneruskannya, kita terima saja sebagai prop, meskipun tidak dipakai di JSX ini.

  // Filter produk berdasarkan searchTerm (menggunakan props.products yang sudah up-to-date)
  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <main className="dashboard-content">
      <h1 className="dashboard-title">Welcome To My Dashboard</h1>
      <div className="product-list">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              image={product.image}
              name={product.name}
              price={product.price}
              slug={product.slug}
              // PENTING: Teruskan data rating yang sudah diupdate ke ProductCard
              rating={product.rating || 0}
              ratingCount={product.ratingCount || 0}
              onAddToCart={() => onAddToCart(product)}
            />
          ))
        ) : (
          <p>Product not found.</p>
        )}
      </div>
    </main>
  );
}

export default DashboardContent;
