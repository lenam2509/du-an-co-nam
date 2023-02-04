import { Link } from 'react-router-dom'
import { NavigateNext, PhoneAndroid, Laptop, Tablet, Headphones } from '@mui/icons-material'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import React from 'react'
import './index.css'
import CountDown from '../../components/client/Countdown/Countdown'


function ClientIndex() {
  const deadline = new Date("2023-02-14T00:00:00").getTime();
  const images = [
    '/images/baner1.png',
    '/images/baner2.png',
    '/images/baner3.png',
    '/images/baner4.png',
    '/images/baner5.png',
  ]
  const bannerright = [
    '/images/baner-right1.png',
    '/images/baner-right2.png',
    '/images/baner-right3.png',
  ]
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
          <Carousel autoPlay={true} infiniteLoop={true} showArrows={false} className='carousel-baner' >
            {images.map((image, index) => (
              <img key={index} src={image} alt="Slider" />
            ))}
          </Carousel>
        </div>
        <div className="baners-right">
          {bannerright.map((image, index) => (
            <img key={index} src={image} alt="Slider" />
          ))}
        </div>
      </div>
      <div className="box2">
        <div className="box2-title">
          <div className="box2-tap-menu">
            <p className="box2-tap-item box2-tap-item-active">Điện thoại,Laptop,TV</p>
            <p className="box2-tap-item">Phụ kiện</p>
          </div>
          <div className="box2-title-image">
            <img src="/images/hot-sale-cuoi-tuan.png" alt="box2-title" />
          </div>
          <div className="box2-title-countdown">
            <CountDown deadline={deadline} />
          </div>
        </div>
        <div className="box2-content">
          <div className="box2-content-item">
            
          </div>
        </div>
      </div>

    </div>
  )
}

export default ClientIndex