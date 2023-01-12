import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../../components/admin/sidebar/Sidebar'
import Topbar from '../../components/admin/topbar/Topbar'

function AdminIndex() {
    return (
        <>
            <Topbar />
            <Sidebar />
            <div className="container">
                <Outlet />
            </div>
        </>
    )
}

export default AdminIndex