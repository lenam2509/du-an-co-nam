import React from 'react'
import './topbar.css'
import { NotificationsNone, Language, Settings } from '@mui/icons-material';
import { useSelector, useDispatch } from 'react-redux'
import { logout } from '../../../Redux/Actions/AuthAction'
function Topbar() {
  const { user } = useSelector(state => state.auth)
  const dispatch = useDispatch()
  const handleLogout = () => {
    dispatch(logout())
  }
  return (
    <div className="topbar">
      <div className="topbar-wrapper">
        <div className="topbar-left">
          <span className="logo">Admin Panel</span>
        </div>
        <div className="topbar-right">
          <div className="topbar-icon">
            <NotificationsNone />
            <span className='topiconBadge'>2</span>
          </div>
          <div className="topbar-icon">
            <Language />
          </div>
          <div className="topbar-icon">
            <Settings />
          </div>
          <div className="topbar_username">{user.lastname}</div>
          <img className='topAvatar' src='https://thumbs.dreamstime.com/b/default-avatar-profile-icon-vector-default-avatar-profile-icon-vector-social-media-user-image-vector-illustration-227787227.jpg' alt='' />
          <button onClick={handleLogout} className='logout_btn'>Đăng xuất</button>
        </div>
      </div>
    </div>
  )
}

export default Topbar