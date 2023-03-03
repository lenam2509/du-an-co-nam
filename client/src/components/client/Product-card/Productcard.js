import React from 'react'
import { Link } from 'react-router-dom'
import './productcard.css'
export default function ProductCard() {
    return (
        <div>
            <Link to='#'>
                <div className="product-card">
                    <div className="product-card-image">
                        <img src="/images/iphone.png" alt="iphone-12-pro-max-256gb-1" />
                    </div>
                    <div className="product-card-title">
                        <p>iPhone 12 Pro Max 256GB</p>
                    </div>
                    <div className="product-card-price">
                        <p className="new-price">32.990.000đ</p> <p className="old-price">33.990.000đ</p>
                    </div>
                    <div className="product-card-promotion">
                        <p>Thu cũ lên đời - Trợ giá 1 triệu</p>
                    </div>
                    <div className="product-cart-sale-icon">
                        <p>Giảm 17%</p>
                    </div>
                </div>
            </Link>
        </div>
    )
}
