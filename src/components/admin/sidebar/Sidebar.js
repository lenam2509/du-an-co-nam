import React from 'react'
import './sidebar.css'
import { LineStyle, Reorder, PlaylistAdd, Person, GroupAdd } from '@mui/icons-material'
import { Link } from 'react-router-dom'
function Sidebar() {
    // const sidebarMenu = [
    //     { id: 1, title: 'Dashboard', name: 'Thống kê' },
    //     { id: 2, title: 'Sản phẩm', name: 'Danh sách sản phẩm' },
    // ]


    return (
        <div className='sidebar'>
            <div className='sidebarWrapper'>
                <div className="sidebarMenu">
                    <h3 className='sidebarTitle'>Dashboard</h3>
                    <ul className='sidebarList'>
                        <li className='sidebarListitem active'>
                            <Link to='/admin/home'>
                                <LineStyle className='sidebarIcon' />Thống kê
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className='sidebarTitle'>Sản phẩm</h3>
                    <ul className='sidebarList'>
                        <li className='sidebarListitem '>
                            <Link to='/admin/products'>
                                <Reorder className='sidebarIcon' />Danh sách sản phẩm
                            </Link>
                        </li>
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
                        <li className='sidebarListitem '>
                            <Link to='/admin/users'>
                                <Person className='sidebarIcon' />Danh sách tài khoản
                            </Link>
                        </li>
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