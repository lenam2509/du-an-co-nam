import React, { useState } from "react";
import ReactStars from "react-rating-stars-component";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import ProductCard from "../components/ProductCard";
import ReactImageZoom from "react-image-zoom";
import Color from "../components/Color";
import { TbGitCompare } from "react-icons/tb";
import { AiOutlineHeart } from "react-icons/ai";
import { Link } from "react-router-dom";
import watch from "../images/watch.jpg";
import Container from "../components/Container";
const SingleProduct = () => {
  const props = {
    width: 594,
    height: 600,
    zoomWidth: 600,

    img: "https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=pexels-fernando-arcos-190819.jpg&fm=jpg",
  };

  const [orderedProduct, setorderedProduct] = useState(true);
  const copyToClipboard = (text) => {
    console.log("text", text);
    var textField = document.createElement("textarea");
    textField.innerText = text;
    document.body.appendChild(textField);
    textField.select();
    document.execCommand("copy");
    textField.remove();
  };
  const closeModal = () => {};
  return (
    <>
      <Meta title={"Product Name"} />
      <BreadCrumb title="Product Name" />
      <Container class1="main-product-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-6">
            <div className="main-product-image">
              <div>
                <ReactImageZoom {...props} />
              </div>
            </div>
            <div className="other-product-images d-flex flex-wrap gap-15">
              <div>
                <img
                  src="https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=pexels-fernando-arcos-190819.jpg&fm=jpg"
                  className="img-fluid"
                  alt=""
                />
              </div>
              <div>
                <img
                  src="https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=pexels-fernando-arcos-190819.jpg&fm=jpg"
                  className="img-fluid"
                  alt=""
                />
              </div>
              <div>
                <img
                  src="https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=pexels-fernando-arcos-190819.jpg&fm=jpg"
                  className="img-fluid"
                  alt=""
                />
              </div>
              <div>
                <img
                  src="https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=pexels-fernando-arcos-190819.jpg&fm=jpg"
                  className="img-fluid"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="main-product-details">
              <div className="border-bottom">
                <h3 className="title">
                S???n ph???m cho tr??? em
                </h3>
              </div>
              <div className="border-bottom py-3">
                <p className="price">$ 100</p>
                <div className="d-flex align-items-center gap-10">
                  <ReactStars
                    count={5}
                    size={24}
                    value={4}
                    edit={false}
                    activeColor="#ffd700"
                  />
                  <p className="mb-0 t-review">( 2 Nh???n x??t )</p>
                </div>
                <a className="review-btn" href="#review">
                  Vi???t ????nh gi??
                </a>
              </div>
              <div className=" py-3">
                <div className="d-flex gap-10 align-items-center my-2">
                  <h3 className="product-heading">Ki???u :</h3>
                  <p className="product-data">?????ng h???</p>
                </div>
                <div className="d-flex gap-10 align-items-center my-2">
                  <h3 className="product-heading">Th????ng hi???u :</h3>
                  <p className="product-data">Th????ng hi???u c???a s???n ph???m</p>
                </div>
                <div className="d-flex gap-10 align-items-center my-2">
                  <h3 className="product-heading">Lo???i :</h3>
                  <p className="product-data">?????ng h???</p>
                </div>
                <div className="d-flex gap-10 align-items-center my-2">
                  <h3 className="product-heading">Nh??n :</h3>
                  <p className="product-data">?????ng h???</p>
                </div>
                <div className="d-flex gap-10 align-items-center my-2">
                  <h3 className="product-heading">Kh??? d???ng :</h3>
                  <p className="product-data">Trong kho</p>
                </div>
                <div className="d-flex gap-10 flex-column mt-2 mb-3">
                  <h3 className="product-heading">K??ch th?????c :</h3>
                  <div className="d-flex flex-wrap gap-15">
                    <span className="badge border border-1 bg-white text-dark border-secondary">
                      S
                    </span>
                    <span className="badge border border-1 bg-white text-dark border-secondary">
                      M
                    </span>
                    <span className="badge border border-1 bg-white text-dark border-secondary">
                      XL
                    </span>
                    <span className="badge border border-1 bg-white text-dark border-secondary">
                      XXL
                    </span>
                  </div>
                </div>
                <div className="d-flex gap-10 flex-column mt-2 mb-3">
                  <h3 className="product-heading">M??u :</h3>
                  <Color />
                </div>
                <div className="d-flex align-items-center gap-15 flex-row mt-2 mb-3">
                  <h3 className="product-heading">S??? l?????ng :</h3>
                  <div className="">
                    <input
                      type="number"
                      name=""
                      min={1}
                      max={10}
                      className="form-control"
                      style={{ width: "70px" }}
                      id=""
                    />
                  </div>
                  <div className="d-flex align-items-center gap-30 ms-5">
                    <button
                      className="button border-0"
                      data-bs-toggle="modal"
                      data-bs-target="#staticBackdrop"
                      type="button"
                    >
                      Th??m v??o gi??? h??ng
                    </button>
                    <button className="button signup">Mua ngay</button>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-15">
                  <div>
                    <a href="">
                      <TbGitCompare className="fs-5 me-2" />Th??m v??o so s??nh
                    </a>
                  </div>
                  <div>
                    <a href="">
                      <AiOutlineHeart className="fs-5 me-2" /> Th??m v??o danh s??ch y??u th??ch
                    </a>
                  </div>
                </div>
                <div className="d-flex gap-10 flex-column  my-3">
                  <h3 className="product-heading">V???n chuy???n : Tr??? h??ng</h3>
                  <p className="product-data">
                    Mi???n ph?? v???n chuy???n cho ????n h??ng 300k <br /> Giao h??ng t??? 5 - 10 ng??y
                  
                  </p>
                </div>
                <div className="d-flex gap-10 align-items-center my-3">
                  <h3 className="product-heading">Li??n k???t s???n ph???m:</h3>
                  <a
                    href="javascript:void(0);"
                    onClick={() => {
                      copyToClipboard(
                        "https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=pexels-fernando-arcos-190819.jpg&fm=jpg"
                      );
                    }}
                  >
                    Sao ch??p ???????ng d???n s???n ph???m
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Container class1="description-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h4>M?? t???</h4>
            <div className="bg-white p-3">
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Tenetur nisi similique illum aut perferendis voluptas, quisquam
                obcaecati qui nobis officia. Voluptatibus in harum deleniti
                labore maxime officia esse eos? Repellat?
              </p>
            </div>
          </div>
        </div>
      </Container>
      <Container class1="reviews-wrapper home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3 id="review">Nh???n x??t</h3>
            <div className="review-inner-wrapper">
              <div className="review-head d-flex justify-content-between align-items-end">
                <div>
                  <h4 className="mb-2">Ph???n h???i kh??ch h??ng</h4>
                  <div className="d-flex align-items-center gap-10">
                    <ReactStars
                      count={5}
                      size={24}
                      value={4}
                      edit={false}
                      activeColor="#ffd700"
                    />
                    <p className="mb-0">D???a tr??n 2 ????nh gi??</p>
                  </div>
                </div>
                {orderedProduct && (
                  <div>
                    <a className="text-dark text-decoration-underline" href="">
                     Vi???t ????nh gi??
                    </a>
                  </div>
                )}
              </div>
              <div className="review-form py-4">
                <h4>Vi???t ????nh gi??</h4>
                <form action="" className="d-flex flex-column gap-15">
                  <div>
                    <ReactStars
                      count={5}
                      size={24}
                      value={4}
                      edit={true}
                      activeColor="#ffd700"
                    />
                  </div>
                  <div>
                    <textarea
                      name=""
                      id=""
                      className="w-100 form-control"
                      cols="30"
                      rows="4"
                      placeholder="Comments"
                    ></textarea>
                  </div>
                  <div className="d-flex justify-content-end">
                    <button className="button border-0">G???i ????nh gi??</button>
                  </div>
                </form>
              </div>
              <div className="reviews mt-4">
                <div className="review">
                  <div className="d-flex gap-10 align-items-center">
                    <h6 className="mb-0">??i???u h?????ng s??u</h6>
                    <ReactStars
                      count={5}
                      size={24}
                      value={4}
                      edit={false}
                      activeColor="#ffd700"
                    />
                  </div>
                  <p className="mt-3">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Consectetur fugit ut excepturi quos. Id reprehenderit
                    voluptatem placeat consequatur suscipit ex. Accusamus dolore
                    quisquam deserunt voluptate, sit magni perspiciatis quas
                    iste?
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Container class1="popular-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">S???n ph???m ph??? bi???n c???a ch??ng t??i</h3>
          </div>
        </div>
        <div className="row">
          <ProductCard />
        </div>
      </Container>

      <div
        className="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered ">
          <div className="modal-content">
            <div className="modal-header py-0 border-0">
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body py-0">
              <div className="d-flex align-items-center">
                <div className="flex-grow-1 w-50">
                  <img src={watch} className="img-fluid" alt="product imgae" />
                </div>
                <div className="d-flex flex-column flex-grow-1 w-50">
                  <h6 className="mb-3">?????ng h??? Apple</h6>
                  <p className="mb-1">S??? l?????ng: asgfd</p>
                  <p className="mb-1">M??u: asgfd</p>
                  <p className="mb-1">K??ch th?????c: asgfd</p>
                </div>
              </div>
            </div>
            <div className="modal-footer border-0 py-0 justify-content-center gap-30">
              <button type="button" className="button" data-bs-dismiss="modal">
                Xem gi??? h??ng c???a b???n
              </button>
              <button type="button" className="button signup">
                Th??? t???c thanh to??n
              </button>
            </div>
            <div className="d-flex justify-content-center py-3">
              <Link
                className="text-dark"
                to="/product"
                onClick={() => {
                  closeModal();
                }}
              >
                Ti???p t???c mua s???m
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleProduct;
