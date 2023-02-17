import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../../components/admin/sidebar/Sidebar'
import Topbar from '../../components/admin/topbar/Topbar'
import './index.css'
function AdminIndex() {
    if (!localStorage.getItem('admin')) {
        window.location.href = '/admin/login'
    }
    return (
        <>
            <Topbar />
            <div className="container">
                <Sidebar />
                <div className="otherPages"><Outlet /></div>
            </div>
        </>
    )
}

export default AdminIndex