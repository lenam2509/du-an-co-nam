import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../../components/admin/sidebar/Sidebar'
import Topbar from '../../components/admin/topbar/Topbar'
import { useSelector } from 'react-redux'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './index.css'

function AdminIndex() {
    const { isAuthenticated } = useSelector(state => state.auth)
    const { role } = useSelector(state => state.auth)

    if (isAuthenticated === false) {
        window.location.href = '/admin/login'
        toast.error('Bạn không có quyền truy cập vào trang này')
    } else if (role !== 'admin') {
        window.location.href = '/'
        toast.error('Bạn không có quyền truy cập vào trang này')
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