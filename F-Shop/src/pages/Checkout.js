import React from "react";
import { Link } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
import watch from "../images/watch.jpg";
import Container from "../components/Container";

const Checkout = () => {
  return (
    <>
      <Container class1="checkout-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-7">
            <div className="checkout-left-data">
              <h3 className="website-name">F Shop</h3>
              <nav
                style={{ "--bs-breadcrumb-divider": ">" }}
                aria-label="breadcrumb"
              >
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link className="text-dark total-price" to="/cart">
                      Giỏ hàng
                    </Link>
                  </li>
                  &nbsp; /&nbsp;
                  <li
                    className="breadcrumb-ite total-price active"
                    aria-current="page"
                  >
                    Thông tin
                  </li>
                  &nbsp; /
                  <li className="breadcrumb-item total-price active">
                    Đang chuyển hàng
                  </li>
                  &nbsp; /
                  <li
                    className="breadcrumb-item total-price active"
                    aria-current="page"
                  >
                    Thanh toán
                  </li>
                </ol>
              </nav>
              <h4 className="title total">Thông tin liên hệ</h4>
              <p className="user-details total">
                User demo (Fshop@gmail.com)
              </p>
              <h4 className="mb-3">Địa chỉ giao hàng</h4>
              <form
                action=""
                className="d-flex gap-15 flex-wrap justify-content-between"
              >
                <div className="w-100">
                  <select name="" className="form-control form-select" id="">
                    <option value="" selected disabled>
                     Chọn quốc gia
                    </option>
                  </select>
                </div>
                <div className="flex-grow-1">
                  <input
                    type="text"
                    placeholder="First Name"
                    className="form-control"
                  />
                </div>
                <div className="flex-grow-1">
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="form-control"
                  />
                </div>
                <div className="w-100">
                  <input
                    type="text"
                    placeholder="Address"
                    className="form-control"
                  />
                </div>
                <div className="w-100">
                  <input
                    type="text"
                    placeholder="Apartment, Suite ,etc"
                    className="form-control"
                  />
                </div>
                <div className="flex-grow-1">
                  <input
                    type="text"
                    placeholder="City"
                    className="form-control"
                  />
                </div>
                <div className="flex-grow-1">
                  <select name="" className="form-control form-select" id="">
                    <option value="" selected disabled>
                      Chọn địa phương
                    </option>
                  </select>
                </div>
                <div className="flex-grow-1">
                  <input
                    type="text"
                    placeholder="Zipcode"
                    className="form-control"
                  />
                </div>
                <div className="w-100">
                  <div className="d-flex justify-content-between align-items-center">
                    <Link to="/cart" className="text-dark">
                      <BiArrowBack className="me-2" />
                      Quay lại giỏ hàng
                    </Link>
                    <Link to="/cart" className="button">
                      Tiếp tục đặt hàng
                    </Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="col-5">
            <div className="border-bottom py-4">
              <div className="d-flex gap-10 mb-2 align-align-items-center">
                <div className="w-75 d-flex gap-10">
                  <div className="w-25 position-relative">
                    <span
                      style={{ top: "-10px", right: "2px" }}
                      className="badge bg-secondary text-white rounded-circle p-2 position-absolute"
                    >
                      1
                    </span>
                    <img className="img-fluid" src={watch} alt="product" />
                  </div>
                  <div>
                    <h5 className="total-price">gfdhgf</h5>
                    <p className="total-price">s / #agfgfd</p>
                  </div>
                </div>
                <div className="flex-grow-1">
                  <h5 className="total">$ 100</h5>
                </div>
              </div>
            </div>
            <div className="border-bottom py-4">
              <div className="d-flex justify-content-between align-items-center">
                <p className="total">Tổng phụ</p>
                <p className="total-price">$ 10000</p>
              </div>
              <div className="d-flex justify-content-between align-items-center">
                <p className="mb-0 total">Đang chuyển hàng</p>
                <p className="mb-0 total-price">$ 10000</p>
              </div>
            </div>
            <div className="d-flex justify-content-between align-items-center border-bootom py-4">
              <h4 className="total">Tất cả</h4>
              <h5 className="total-price">$ 10000</h5>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Checkout;
