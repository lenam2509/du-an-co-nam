import React from 'react'
import { useLocation } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
export default function Wrapper({ children }) {
    const location = useLocation();
    return (
        <div>
            {!location.pathname.startsWith('/admin') && (
                <>
                    {/* <Header /> */}
                    {children}
                    <Footer />
                </>
            )}
            {location.pathname.startsWith('/admin') && children}
        </div>
    )
}
