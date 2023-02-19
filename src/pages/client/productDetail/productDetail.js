import React from "react";
import ProductCard from "../../../components/client/Product-card/Productcard";
import "./productDetail.css";
import MultiCarousel from "react-multi-carousel";
import { Link } from "react-router-dom";
function ProductDetail() {
  return (
    <div class="product-detail">
      <div class="image-column">
        <Link>
          <img src="/images/nokiac21.png" />
        </Link>
      </div>
      <div class="info-column">
      {/* <div className="product-name">NokiaC21</div> */}
        <div className="productDetail-price">
          <p className="new-price">32.990.000đ</p>{" "}
          <p className="old-price">33.990.000đ</p>
        </div>
        <div className="sub-column1"></div>
        <div className="sub-column1"></div>

        <a href="#" className="sub-column">
          <strong>16GB 1TB</strong>
          <span>32.990.000 đ</span>
        </a>
        <a href="#" className="sub-column">
          <strong>8GB 512GB</strong>
          <span>26.390.000 đ</span>
        </a>
        <a href="#" className="sub-column">
          <strong>6GB 256GB</strong>
          <span>23.390.000 đ</span>
        </a>
        <button class="order-button">
          <strong>MUA NGAY</strong>
          <span>(Giao tận nơi hoặc lấy tại cửa hàng)</span>{" "}
        </button>
        <button class="tragop-button">
          <strong class="has-text-white">
            TRẢ GÓP <span>0%</span>
          </strong>
          <br /> <span class="has-text-white">(Xét duyệt qua điện thoại)</span>
        </button>
      </div>
      <div class="details-column">
        <strong>Thông tin chi tiết</strong>
        <ul>
          <li>Kích thước màn hình 6.52 inches</li>
          <li>Công nghệ màn hình IPS LCD</li>
          <li>Camera sau 13 MP + 2 MP</li>
          <li>Camera trước 5 MP</li>
          <li>Chipset Unisoc SC9863A</li>
          <li>Dung lượng RAM 6 GB</li>
          <li>Bộ nhớ trong 256 GB</li>
          <li>Thẻ SIM 2 SIM (Nano-SIM)</li>
          <li>Hệ điều hành Android 11 (Go edition)</li>
          <li>Độ phân giải màn hình 720 x 1600 pixel</li>
        </ul>
      </div>
    </div>
  );
}

export default ProductDetail;
