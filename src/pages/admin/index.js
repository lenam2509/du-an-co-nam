import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../../components/admin/sidebar/Sidebar'
import Topbar from '../../components/admin/topbar/Topbar'
import { useSelector } from 'react-redux'

import './index.css'
function AdminIndex() {
    const { isAuthenticated } = useSelector(state => state.auth)

    if (isAuthenticated === false) {
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