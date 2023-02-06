import React from 'react';
import './productDetail.css';

const ProductDetail = (props) => {
  return (
    <div className="product-detail-container">
      <h1>Tên Sản Phẩm</h1>
      <div className="product-image">
        <img src="product.jpg" alt="product" />
      </div>
      <p className="product-description">Mô tả </p>
    </div>
  );
};

export default ProductDetail;
