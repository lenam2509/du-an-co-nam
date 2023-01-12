import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AdminIndex from './pages/admin'
import Dashboard from './pages/admin/Dashboard/Dashboard'
import Login from './pages/admin/Login'
import Products from './pages/admin/Products/Products'
import Home from './pages/client/Home'
import './app.css'
function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} >
                        {/* bên client */}
                    </Route>

                    <Route path="/admin" element={<AdminIndex />} >
                        <Route path="login" element={<Login />} />
                        <Route path="dashboard" element={<Dashboard />} />
                        <Route path="products" element={<Products />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App