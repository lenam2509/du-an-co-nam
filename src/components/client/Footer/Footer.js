/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link } from "react-router-dom";
import "./footer.css";
export default function Footer() {
  return (
    <div>
      <footer className="site-footer">
        <div className="footer-container">
          
          <nav className="footer-nav">
            <ul className="footer-menu">
              <li className="footer-menu-item">
              <h3>Thông tin liên hệ</h3>
                <Link href="#">
                  
                  <p>Phone: (123) 456-7890</p>
                  <p>Email:cskhFphone@.com</p>
                  <p>Địa chỉ: 123 Nguyễn Đình Chiểu, Phường 6, Quận 3, Tp Hồ Chí Minh</p>
                </Link>
              </li>
              <li className="footer-menu-item">
              <h3>Về chúng tôi</h3>
                <Link href="#">
                  
                  <div >
                  <p id="about">Giới thiệu công ty</p>
                  <p id="about">Tuyển dụng</p>
                  <p id="about">Góp ý, khiếu nại</p>
                  </div>
                  
                  
                </Link>
              </li>
              <li className="footer-menu-item">
              <h3>Tổng đài hỗ trợ (Miễn phí gọi) </h3>
                
                  
                  <p>Gọi mua: <a  id="sdt" href="">1800.1234</a> (7:30 - 22:00)</p>
                  <p>Kỹ thuật: <a  id="sdt" href="">1800.1765</a> (7:30 - 22:00)</p>
                  <p>Bảo hành: <a  id="sdt" href="">1800.1069</a> (8:00 - 21:00) </p>
                
              </li>
              <li className="footer-menu-item">
              <h3>Dịch vụ khách hàng</h3>
                <Link href="#">
                  
                  <p id="about">FAQ</p>
                  <p id="about">Đổi trả</p>
                  <p id="about">Tra thông tin đơn hàng</p>
                </Link>
              </li>
            </ul>

          </nav>
          <p className="copyright">Copyright &copy; 2023 Fphone Company</p>
        </div>
      </footer>
    </div>
  );
}
