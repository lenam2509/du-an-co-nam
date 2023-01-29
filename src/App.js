import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AdminIndex from './pages/admin'
import Dashboard from './pages/admin/Dashboard/Dashboard'
import Products from './pages/admin/Products/Products'
import Home from './pages/client/Home'
import './app.css'
import Users from './pages/admin/Users/Users'
function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} >
                        {/* bên client */}
                    </Route>

                    <Route path="/admin" element={<AdminIndex />} >
                        {/* bên admin */}
                        <Route path="home" element={<Dashboard />} />
                        <Route path="products" element={<Products />} />
                        <Route path="users" element={<Users />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App