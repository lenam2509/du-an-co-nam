import React from "react";
import { Link } from "react-router-dom";
import "./cart.css";
import DeleteIcon from "@mui/icons-material/Delete";
import Products from "../../admin/Products/Products";
import { Button, Stack } from "@mui/material";
import QuantityControl from "./QuantityControl";
function Cart() {
  return (
    <div class="shopping-cart">
      <div class="column left"></div>
      <div class="column middle">
        <div className="cart-header" direction='row'>
          <Link to="#" className="muathem">
            Trở về
          </Link>
          <p>Giỏ hàng</p>
        </div>
        <div className="product-item">
          <div className="product-item-image">
            <Link>
              <img src="../../../../public/images/nokiac22.png" alt="" />
            </Link>
          </div>
          <div className="product-item-info">
            <div className="line1">
              <div className="product-name">
                <Link to="#">Nokia C21 Plus 2GB 64GB-Xám</Link>
              </div>
              <div className="xoa">
                <Link to="#">
                  {" "}
                  <DeleteIcon></DeleteIcon>
                </Link>
              </div>
            </div>

            <div className="line2">
              <div className="product-price">
                <p className="new-price">32.990.000đ</p>
                <p className="old-price">33.990.000đ</p>
              </div>
            </div>

            <div className="line3">
              <div className="ctkm"></div>
              <div class="quantity-control">
                <button class="decrease-quantity">-</button>
                <input class="quantity-input" value="1" />
                <button class="increase-quantity">+</button>

                {/* <QuantityControl /> */}
              </div>
            </div>
          </div>
        </div>
        <div className="product-item">
          <div className="product-item-image">
            <Link>
              <img src="/public/images/nokiac21.png" alt="" />
            </Link>
          </div>
          <div className="product-item-info">
            <div className="line1">
              <div className="product-name">
                <Link to="#">Nokia C21 Plus 2GB 64GB-Xám</Link>
              </div>
              <div className="xoa">
                <Link to="#">
                  {" "}
                  <DeleteIcon></DeleteIcon>
                </Link>
              </div>
            </div>

            <div className="line2">
              <div className="product-price">
                <p className="new-price">32.990.000đ</p>
                <p className="old-price">33.990.000đ</p>
              </div>
            </div>

            <div className="line3">
              <div className="ctkm"></div>
              <div class="quantity-control">
                <button class="decrease-quantity">-</button>
                <input class="quantity-input" value="1" />
                <button class="increase-quantity">+</button>
              </div>
            </div>
          </div>
        </div>
        <div className="total">
          <div className="line4">
            <div className="tong-tien">Tổng tiền tạm tính:</div>
            <div className="tong-tien-so"> 65.000.000đ</div>
          </div>

          <Stack  >
          <Link to= '../payment'>
          <Button  className="dat-hang"  variant="contained" color="error"  >TIẾN HÀNH ĐẶT HÀNG</Button>
          </Link>

          <Link to='/'>
          <Button  className="chon-them"  variant="contained" color="info" style={{ marginTop:"10px " }}>CHỌN THÊM SẢN PHẨM KHÁC</Button>
          </Link>
          </Stack>
          
        </div>
      </div>
      <div class="column right"></div>
    </div>
  );
}

export default Cart;