import React from "react";
import { Link } from "react-router-dom";
import "./paymentInfo.css";
import DeleteIcon from "@mui/icons-material/Delete";
import { Stack, Button } from "@mui/material";
import {
  TextField,
  FormControl,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@mui/material";

function PaymentInfo() {
  return (
    <div class="shopping-cart">
      <div class="column left"></div>
      <div class="column middle">
        <div className="cart-header">
          <Link to="../cart" className="muathem">
            Trở về
          </Link>
          <p>Thông tin đặt hàng</p>
        </div>
        <div className="info-customer">
          <FormControl>
            <TextField className="customer-name" label="Họ tên" required />
            <TextField
              className="customer-phone"
              label="Số điện thoại"
              required
            />
            <TextField
              className="customer-email"
              label="Email"
              type="email"
              required
            />
            <p className="cach-nhan-hang">Chọn cách thức giao hàng</p>
            <RadioGroup aria-label="Nhận hàng tại" name="nhan-hang-tai">
              <FormControlLabel
                className="store"
                value="store"
                control={<Radio />}
                label="Nhận hàng tại cửa hàng"
              />
              <FormControlLabel
                className="home"
                value="home"
                control={<Radio />}
                label="Nhận hàng tại nhà"
              />
            </RadioGroup>

            <TextField className="address" label="Địa chỉ" />
            <TextField className="other-requirements" label="Yêu cầu khác" />
          </FormControl>
        </div>
        <div className="total">
          <div className="line4">
            <div className="tong-tien">Tổng tiền tạm tính:</div>
            <div className="tong-tien-so"> 65.000.000đ</div>
          </div>

          <Stack>
            <Link to="">
              <Button
                className="dat-hang"
                variant="contained"
                color="error"
                onClick={() => alert("Bạn đã đặt hàng thành công")}
              >
                HOÀN TẤT
              </Button>
            </Link>

            <Link to="/">
              <Button
                className="chon-them"
                variant="contained"
                color="info"
                style={{ marginTop: "10px" }}
              >
                CHỌN THÊM SẢN PHẨM KHÁC
              </Button>
            </Link>
          </Stack>
        </div>
      </div>
      <div class="column right"></div>
    </div>
  );
}

export default PaymentInfo;
