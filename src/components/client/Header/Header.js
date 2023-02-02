import React from 'react'
import { Link } from 'react-router-dom';
import './header.css'
import { useState, useEffect } from 'react';
import { ListAlt, Room, SavedSearch, PhoneAndroid, LocalPhone, Receipt, ShoppingCart, Person } from '@mui/icons-material';
export default function Header() {
    const [open, setOpen] = useState(false);
    const [logo, setLogo] = useState("Fphone");

    const toggleOpen = () => {
        setOpen(!open);
    };

    useEffect(() => {
        function handleResize() {
            if (window.innerWidth <= 767) {
                setLogo("F");
            } else {
                setLogo("Fphone");
            }
        }

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <div>
            <header className={`header ${open ? 'open' : ''}`}>
                <div className="header-container">
                    <nav className="header-navbar">
                        <Link to="/" className="header-logo">{
                            logo
                        }<PhoneAndroid /></Link>
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
                        <Link to='#' className="header-btn-danhmuc">
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
