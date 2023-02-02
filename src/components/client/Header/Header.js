import React from 'react'
import { Link } from 'react-router-dom';
import './header.css'
import { useState } from 'react';
import { ListAlt, Room, SavedSearch, PhoneAndroid, LocalPhone, Receipt, ShoppingCart, Person } from '@mui/icons-material';
export default function Header() {
    const [open, setOpen] = useState(false);

    const toggleOpen = () => {
        setOpen(!open);
    };

    return (
        <div>
            <header className={`header ${open ? 'open' : ''}`}>
                <div className="header-container">
                    <nav className="header-navbar">
                        <Link to="/" className="header-logo">Fphone<PhoneAndroid /></Link>
                        <Link to='#' className="header-btn-danhmuc">
                            <ListAlt /><span>Danh mục</span>
                        </Link>
                        <Link to='#' className="header-btn-diadiem">
                            <Room /><span>Xem giá tại địa điểm</span>
                        </Link>
                        <Link className="header-form">
                            <form>
                                <SavedSearch />
                                <input type="text" placeholder="Bạn cần tìm gì?" />
                            </form>
                        </Link>
                        <Link to='#' className="header-btn-diadiem">
                            <LocalPhone /><span>1800 2509</span>
                        </Link>
                        <Link to='#' className="header-btn-diadiem">
                            <Room /><span>Cửa hàng gần bạn</span>
                        </Link>
                        <Link to='#' className="header-btn-diadiem">
                            <Receipt /><span>Hóa đơn</span>
                        </Link>
                        <Link to='#' className="header-btn-diadiem">
                            <ShoppingCart /><span>Giỏ hàng:0</span>
                        </Link>
                        <Link to='#' className="header-btn-diadiem">
                            <Person /><span>Đăng nhập</span>
                        </Link>
                    </nav>
                </div>
            </header>
        </div>
    )
}
