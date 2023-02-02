import React from 'react'
import { Link } from 'react-router-dom'
import './footer.css'
export default function Footer() {
    return (
        <div>
            <footer className="site-footer">
                <div className="container">
                    <p className="copyright">Copyright &copy; 2023 Example Company</p>
                    <nav className="footer-nav">
                        <ul className="footer-menu">
                            <li className="footer-menu-item"><Link href="#">About</Link></li>
                            <li className="footer-menu-item"><Link href="#">Contact</Link></li>
                            <li className="footer-menu-item"><Link href="#">Privacy Policy</Link></li>
                        </ul>
                    </nav>
                </div>
            </footer>
        </div>
    )
}
