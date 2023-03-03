import React from 'react'
import { useParams } from 'react-router-dom'
import { Carousel } from 'react-responsive-carousel'
import StarIcon from '@mui/icons-material/Star';
import RedeemIcon from '@mui/icons-material/Redeem';
import './product.css'
function ClientProduct() {
  const { id } = useParams()
  console.log('id: ', id)
  const images = [
    '/images/iphone.png',
    '/images/iphone1.png',
    '/images/iphone2.png',
    '/images/iphone3.png',
  ]
  return (
    <div className="detail-wrapper">
      <div className='detail-container'>
        <div className="box-trai">
          <div className="box-trai-img">
            <Carousel autoPlay={true} infiniteLoop={true} showArrows={false} >
              {images.map((image, index) => (
                <img key={index} src={image} alt="Slider" />
              ))
              }
            </Carousel>
          </div>
        </div>
        <div className="box-phai">
          <div className="box-phai-title">
            <h1>iPhone 12 Pro Max 256GB</h1>
          </div>
          <div className="box-phai-star">
            <StarIcon className="star" />
            <StarIcon className="star" />
            <StarIcon className="star" />
            <StarIcon className="star" />
            <StarIcon className="star" />
            <span className="star-number">12 đánh giá</span>
          </div>
          <div className="box-phai-price">
            <div className="new-price">30.000.000đ</div> <div className="old-price">31.000.000đ</div>
          </div>
          <div className="box-phai-info">
            <div className="info-title">Thông số kỹ thuật:</div>
            <div className="info-content">
              <div className="info-content-item">
                <div className="info-content-item-title">- Màn hình</div>
                <div className="info-content-item-content">OLED, 6.7", Super Retina XDR</div>
              </div>
              <div className="info-content-item">
                <div className="info-content-item-title">- Ram</div>
                <div className="info-content-item-content">4GB</div>
              </div>
              <div className="info-content-item">
                <div className="info-content-item-title">- Camera sau</div>
                <div className="info-content-item-content">48 MP, f/1.8, 24mm, 1.22µm, PDAF, OIS, siêu rộng, cảm biến độ sâu TOF 3D LiDAR</div>
              </div>
              <div className="info-content-item">
                <div className="info-content-item-title">- Camera trước</div>
                <div className="info-content-item-content">12 MP, f/1.9, 23mm, 1/3.6", PDAF</div>
              </div>
              <div className="info-content-item">
                <div className="info-content-item-title">- Chipset</div>
                <div className="info-content-item-content">Apple A16 Bionic 6-core
                </div>
              </div>
            </div>
          </div>
          <div className="box-phai-sale">
            <div className="sale-title">
              <RedeemIcon />
              Khuyến mãi:</div>
            <div className="sale-content">
              <div className="sale-content-item">
                <div className="sale-content-item-title"><span>1</span> Tặng ốp lưng</div>
              </div>
              <div className="sale-content-item">
                <div className="sale-content-item-title"><span>2</span> Thu cũ lên đời - trợ giá 1 triệu</div>
              </div>
              <div className="sale-content-item">
                <div className="sale-content-item-title"><span>3</span> Nhập mã FPHONEBETA để nhận giảm giá khi mua hàng</div>
              </div>
            </div>
          </div>
          <div className="box-phai-button">
            <button className="btn-buy">Mua ngay</button>
            <button className="btn-cart">Thêm vào giỏ hàng</button>
          </div>
        </div>
      </div>
    </div>

  )
}
export default ClientProduct
