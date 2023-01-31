import React from 'react'
import './sidebar.css'
import { LineStyle, Reorder, PlaylistAdd, Person, GroupAdd } from '@mui/icons-material'
import { Link } from 'react-router-dom'
function Sidebar() {

    return (
        <div className='sidebar'>
            <div className='sidebarWrapper'>
                <div className="sidebarMenu">
                    <h3 className='sidebarTitle'>Dashboard</h3>
                    <ul className='sidebarList'>
                        <Link to='/admin/home' style={{ textDecoration: 'none' }}>
                            <li className='sidebarListitem '>
                                <Link to='/admin/home'>
                                    <LineStyle className='sidebarIcon' />Thống kê
                                </Link>
                            </li>
                        </Link>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className='sidebarTitle'>Sản phẩm</h3>
                    <ul className='sidebarList'>
                        <Link to='/admin/products' style={{ textDecoration: 'none' }}>
                            <li className='sidebarListitem '>
                                <Link to='/admin/products'>
                                    <Reorder className='sidebarIcon' />Danh sách sản phẩm
                                </Link>
                            </li>
                        </Link>
                        <li className='sidebarListitem '>
                            <Link to='/admin/addproduct'>
                                <PlaylistAdd className='sidebarIcon' />Thêm sản phẩm
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className='sidebarTitle'>Tài khoản</h3>
                    <ul className='sidebarList'>
                        <Link to='/admin/users' style={{ textDecoration: 'none' }}>
                            <li className='sidebarListitem '>
                                <Link to='/admin/users'>
                                    <Person className='sidebarIcon' />Danh sách tài khoản
                                </Link>
                            </li>
                        </Link>
                        <li className='sidebarListitem '>
                            <Link to='/admin/adduser'>
                                <GroupAdd className='sidebarIcon' />Thêm tài khoản
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Sidebar