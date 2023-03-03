import React from 'react'
import './cart.css'
import DeleteIcon from '@mui/icons-material/Delete';
export default function Cart() {
    const cart = [
        {
            id: 1,
            name: 'iPhone 12 Pro Max 256GB',
            price: 32990000,
            oldPrice: 33000000,
            image: '/images/iphone.png',
            quantity: 1
        },
        {
            id: 2,
            name: 'iPhone 12 Pro Max 256GB',
            price: 32990000,
            oldPrice: 33000000,
            image: '/images/iphone1.png',
            quantity: 1
        },
        {
            id: 3,
            name: 'iPhone 12 Pro Max 256GB',
            price: 32990000,
            oldPrice: 33000000,
            image: '/images/iphone2.png',
            quantity: 1
        },
    ]
    return (
        <div className='cart-wrapper' style={{
            height: cart.length === 0 ? '100vh' : 'auto'
        }}>
            <div className="cart-container">
                <div className="cart-header">
                    <h1>Giỏ hàng</h1>
                </div>
                {
                    cart.length === 0 ? (
                        <div className="cart-empty">
                            <p>Giỏ hàng của bạn đang trống</p>
                        </div>
                    ) : (
                        cart.map((item, index) => (
                            <div className="cart-body" key={index}>
                                <div className="cart-image">
                                    <img src={item.image} alt="" />
                                </div>
                                <div className="cart-info">
                                    <h3>iPhone 12 Pro Max 256GB</h3>
                                    <div className="cart-price">
                                        <p className="cart-newprice">32.990.000đ</p> <p className="cart-oldprice">33.000.000đ</p>
                                        <div className="cart-sale">
                                            Giảm 0%
                                        </div>
                                    </div>
                                </div>
                                <div className="cart-options">
                                    <DeleteIcon />
                                    <div className="cart-quanity">
                                        <button>-</button>
                                        <input type="text" value="1" />
                                        <button>+</button>
                                    </div>
                                </div>
                            </div>
                        ))
                    )
                }
                <div className="cart-footer">
                    <div className="cart-total">
                        <p>Tổng tiền cần thanh toán:</p>
                        <p className="cart-totalprice">
                            {
                                cart.reduce((total, item) => {
                                    return total + item.price * item.quantity
                                }, 0).toLocaleString('vi-VN')

                            }đ
                        </p>
                    </div>
                    <div className="cart-button">
                        <button className="cart-button-buy">THANH TOÁN</button>
                        <button className='cart-button-continue'>Tiếp tục mua hàng</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
