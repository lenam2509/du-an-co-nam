import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AdminIndex from './pages/admin'
import Dashboard from './pages/admin/Dashboard/Dashboard'
import Products from './pages/admin/Products/Products'
import ClientIndex from './pages/client'

import './app.css'
import Users from './pages/admin/Users/Users'
import Wrapper from './components/client/Wrapper/Wrapper'
import ClientProducts from './pages/client/Products/Products'
import Cart from './pages/client/cart/cart'
import ProductDetail from './pages/client/productDetail/productDetail'
import PaymentInfo from './pages/client/paymentInfo/paymentInfo'
// import Header from './components/client/Header/Header'
function App() {
    return (
        <>
            <BrowserRouter>
                <Wrapper>
                    <Routes>
                        <Route path="/" exact element={<ClientIndex />} />
                        <Route path="/products" element={<ClientProducts />} />
                        <Route path="/cart" element={<Cart/>} />
                        <Route path="/productDetail" element={<ProductDetail/>} />
                        <Route path="/payment" element={<PaymentInfo/>} />
                        


                        {/* bên admin */}
                        <Route path="/admin" element={<AdminIndex />} >
                            {/* bên admin */}
                            <Route path="home" element={<Dashboard />} />
                            <Route path="products" element={<Products />} />
                            <Route path="users" element={<Users />} />
                        </Route>
                    </Routes>
                </Wrapper>
            </BrowserRouter>
        </>
    )
}

export default App