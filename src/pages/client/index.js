import { Link } from 'react-router-dom'
import { NavigateNext, PhoneAndroid, Laptop, Tablet, Headphones } from '@mui/icons-material'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css"

import MultiCarousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import React from 'react'
import './index.css'
import CountDown from '../../components/client/Countdown/Countdown'

import Productcard from '../../components/client/Product-card/Productcard'

function ClientIndex() {
  const deadline = new Date("2023-02-14T00:00:00").getTime();
  const images = [
    '/images/baner1.png',
    '/images/baner2.png',
    '/images/baner3.png',
    '/images/baner4.png',
    '/images/baner5.png',
  ]
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
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
            <Link to='/products'>
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
          <MultiCarousel responsive={responsive} autoPlay={true} infinite={true}>
            <Productcard />
            <Productcard />
            <Productcard />
            <Productcard />
            <Productcard />
            <Productcard />
          </MultiCarousel>
        </div>
      </div>
      <div className="box3">
        <div className="box3-title">
          <span> Điện thoại nổi bật nhất</span>
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
              <li>Vivo</li>
            </Link>
            <Link to='#'>
              <li>Nokia</li>
            </Link>
            <Link to='#'>
              <li>Asus</li>
            </Link>
            <Link to='#'>
              <li>Tecno</li>
            </Link>
            <Link to='#'>
              <li>Tất cả</li>
            </Link>
          </ul>
        </div>
        <div className="box3-content">
          <MultiCarousel responsive={responsive} autoPlay={true} infinite={true}>
            <Productcard />
            <Productcard />
            <Productcard />
            <Productcard />
            <Productcard />
            <Productcard />
          </MultiCarousel>
          <MultiCarousel responsive={responsive} autoPlay={true} infinite={true}>
            <Productcard />
            <Productcard />
            <Productcard />
            <Productcard />
            <Productcard />
            <Productcard />
          </MultiCarousel>
        </div>
      </div>
      <div className="box4">
        <div className="box4-title">
          <span> Phụ kiện</span>
          <Link to='#'>Xem tất cả</Link>
        </div>
        <div className="box4-content">
          <Link to='#'>
            <div className="box4-item">
              <span>Phụ kiện Aplle</span>
            </div>
          </Link>
          <Link to='#'>
            <div className="box4-item">
              <span>Phụ kiện Aplle</span>
            </div>
          </Link>
          <Link to='#'>
            <div className="box4-item">
              <span>Phụ kiện Aplle</span>
            </div>
          </Link>
          <Link to='#'>
            <div className="box4-item">
              <span>Phụ kiện Aplle</span>
            </div>
          </Link>
          <Link to='#'>
            <div className="box4-item">
              <span>Phụ kiện Aplle</span>
            </div>
          </Link>
          <Link to='#'>
            <div className="box4-item">
              <span>Phụ kiện Aplle</span>
            </div>
          </Link>
          <Link to='#'>
            <div className="box4-item">
              <span>Phụ kiện Aplle</span>
            </div>
          </Link>
          <Link to='#'>
            <div className="box4-item">
              <span>Phụ kiện Aplle</span>
            </div>
          </Link>
          <Link to='#'>
            <div className="box4-item">
              <span>Phụ kiện Aplle</span>
            </div>
          </Link>
          <Link to='#'>
            <div className="box4-item">
              <span>Phụ kiện Aplle</span>
            </div>
          </Link>
          <Link to='#'>
            <div className="box4-item">
              <span>Phụ kiện Aplle</span>
            </div>
          </Link>
          <Link to='#'>
            <div className="box4-item">
              <span>Phụ kiện Aplle</span>
            </div>
          </Link>
          <Link to='#'>
            <div className="box4-item">
              <span>Phụ kiện Aplle</span>
            </div>
          </Link>
          <Link to='#'>
            <div className="box4-item">
              <span>Phụ kiện Aplle</span>
            </div>
          </Link>
          <Link to='#'>
            <div className="box4-item">
              <span>Phụ kiện Aplle</span>
            </div>
          </Link>
          <Link to='#'>
            <div className="box4-item">
              <span>Phụ kiện Aplle</span>
            </div>
          </Link>
          <Link to='#'>
            <div className="box4-item">
              <span>Phụ kiện Aplle</span>
            </div>
          </Link>
          <Link to='#'>
            <div className="box4-item">
              <span>Phụ kiện Aplle</span>
            </div>
          </Link>
          <Link to='#'>
            <div className="box4-item">
              <span>Phụ kiện Aplle</span>
            </div>
          </Link>
          <Link to='#'>
            <div className="box4-item">
              <span>Phụ kiện Aplle</span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ClientIndex