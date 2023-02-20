import React from "react";
import { Link } from "react-router-dom";
import "./paymentInfo.css";
import DeleteIcon from "@mui/icons-material/Delete";
import { TextField, FormControl, RadioGroup, FormControlLabel, Radio } from '@mui/material';
import { Email } from "@mui/icons-material";
function PaymentInfo() {
  return (
    <div class="shopping-cart">
      <div class="column left"></div>
      <div class="column middle">
        <div className="cart-header">
          <Link to="cart" className="muathem">
            Trở về
          </Link>
          <p>Thông tin đặt hàng</p>
        </div>
        <div className="info-customer">
        
    <FormControl>
      <TextField  className="customer-name" label="Họ tên" />
      <TextField  className="customer-phone" label="Số điện thoại" />
      <TextField className="customer-email" label="Email" type={Email} />
      <p className="cach-nhan-hang">Chọn cách thức giao hàng</p>
      <RadioGroup aria-label="Nhận hàng tại" name="nhan-hang-tai">
        <FormControlLabel  className="home" value="home" control={<Radio />} label="Nhận hàng tại nhà" />
        <FormControlLabel className="store" value="store" control={<Radio />} label="Nhận hàng tại cửa hàng" />
      </RadioGroup>

      <TextField className="address" label="Địa chỉ" />
      <TextField className="
other-requirements" label="Yêu cầu khác" />
    </FormControl>

    
  </div>
        <div className="total">
          <div className="line4">
            <div className="tong-tien">Tổng tiền tạm tính:</div>
            <div className="tong-tien-so"> 65.000.000đ</div>
          </div>

          <Link to="">
            <button className="dat-hang">TIẾN HÀNH ĐẶT HÀNG</button>
          </Link>

          <Link to="/">
            <button className="chon-them">CHỌN THÊM SẢN PHẨM KHÁC</button>
          </Link>
        </div>
      </div>
      <div class="column right"></div>
    </div>
    
  );
}

export default PaymentInfo;
