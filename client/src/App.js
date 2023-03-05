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
import AdminLogin from './pages/admin/Login/AdminLogin'
import ClientProduct from './pages/client/Products/Product'
import UserLogin from './pages/client/Auth/UserLogin'
import UserRegister from './pages/client/Auth/UserRegister'
import Cart from './pages/client/Cart/Cart'
// import Header from './components/client/Header/Header'
function App() {
    return (
        <>
            <BrowserRouter>
                <Wrapper>
                    <Routes>
                        {/* bên client */}
                       
                        <Route path="/" exact element={<ClientIndex />} />
                        <Route path="/products" element={<ClientProducts />} />
                        <Route path="/product/:id" element={<ClientProduct />} />
                        <Route path='/login' element={<UserLogin />}></Route>
                        <Route path='/register' element={<UserRegister />}></Route>
                        <Route path='/cart' element={<Cart />}></Route>
                        {/* bên admin */}
                        <Route path="/admin/login" element={<AdminLogin />} />
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