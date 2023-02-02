import { Link } from 'react-router-dom'
import { NavigateNext, PhoneAndroid, Laptop, Tablet, Headphones } from '@mui/icons-material'
import React from 'react'
import './index.css'


function ClientIndex() {
  return (
    <div className='main-content'>
      <div className="box1">
        <div className="danhmuc">
          <ul>
            <Link to='#'>
              <li> <PhoneAndroid className='danhmuc-icon' /> Điện thoại <NavigateNext className='NavigateNext' />
                <div className="submenu1">
                  <ul>
                    <Link to='#'>
                      <li>Apple</li>
                    </Link>
                    <Link to='#'>
                      <li>Samsung</li>
                    </Link>
                    <Link to='#'>
                      <li>OPPO</li>
                    </Link>
                    <Link to='#'>
                      <li>Xiaomi</li>
                    </Link>
                    <Link to='#'>
                      <li>Vivo</li>
                    </Link>
                    <Link to='#'>
                      <li>Nokia</li>
                    </Link>
                    <Link to='#'>
                      <li>Realm</li>
                    </Link>
                    <Link to='#'>
                      <li>Asus</li>
                    </Link>
                  </ul>
                </div>
              </li>
            </Link>
            <Link to='#'>
              <li><Laptop className='danhmuc-icon' />Laptop <NavigateNext className='NavigateNext' /></li>
            </Link>
            <Link to='#'>
              <li><Tablet className='danhmuc-icon' />Máy tính bảng <NavigateNext className='NavigateNext' /></li>
            </Link>
            <Link to='#'>
              <li><Headphones className='danhmuc-icon' />Tai nghe <NavigateNext className='NavigateNext' /></li>
            </Link>
            <Link to='#'>
              <li><Headphones className='danhmuc-icon' />Tai nghe <NavigateNext className='NavigateNext' /></li>
            </Link>
            <Link to='#'>
              <li><Headphones className='danhmuc-icon' />Tai nghe <NavigateNext className='NavigateNext' /></li>
            </Link>
            <Link to='#'>
              <li><Headphones className='danhmuc-icon' />Tai nghe <NavigateNext className='NavigateNext' /></li>
            </Link>
            <Link to='#'>
              <li><Headphones className='danhmuc-icon' />Tai nghe <NavigateNext className='NavigateNext' /></li>
            </Link>
            <Link to='#'>
              <li><Headphones className='danhmuc-icon' />Tai nghe <NavigateNext className='NavigateNext' /></li>
            </Link>
          </ul>
        </div>
        <div className="image-slider">
          image
        </div>
        <div className="baners">
          baners
        </div>
      </div>
    </div>
  )
}

export default ClientIndex