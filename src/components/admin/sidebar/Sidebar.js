import React from 'react'
import './sidebar.css'
import { LineStyle } from '@mui/icons-material'
function Sidebar() {
    return (
        <div className='sidebar'>
            <div className='sidebarWrapper'>
                <div className="sidebarMenu">
                    <h3 className='sidebarTitle'>Dashboard</h3>
                    <ul className='sidebarList'>
                        <li className='sidebarListitem active'>
                            <LineStyle />Thống kê
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Sidebar