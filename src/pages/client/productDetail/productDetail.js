import React from "react";
import ProductCard from "../../../components/client/Product-card/Productcard";
import "./productDetail.css";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import Alert from "@mui/material/Alert/Alert";
import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  ButtonGroup,
  breadcrumbItems,
  Breadcrumbs
} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
function ProductDetail() {

  const breadcrumbItems = [
    { label: 'Trang chủ', href: '/' },
    { label: 'Danh mục sản phẩm', href: '/category' },
    { label: 'Nokia C21' }
  ];
  return (
    <div class="product-detail">
    <Grid>
    <Breadcrumbs aria-label="breadcrumb" sx={{ mb: 2 }}>
  {breadcrumbItems.map((item, index) => {
    const isLast = index === breadcrumbItems.length - 1;
    return isLast ? (
      <Typography key={index} color="text.primary">{item.label}</Typography>
    ) : (
      <Link key={index} underline="hover" color="inherit" href={item.href}>
        {item.label}
      </Link>
    );
  })}
</Breadcrumbs>

    </Grid>
      <Grid container spacing={0.5} direction="row" justifyContent="center">
        <Grid item xs={12}>
          <Typography variant="h5">Nokia C21 Plus 3GB 32GB</Typography>
        </Grid>
        <Grid item xs={3} sm={6} md={4} className="img-col">
          <Card>
            <CardMedia
              component="img"
              image="/images/nokiac21.png"
              alt="Product image"
            />
          </Card>
        </Grid>
        <Grid item xs={7} sm={6} md={4} className="option">
          <Card>
            <CardContent>
              <Grid container spacing={3} className="productDetail-price">
                <Grid item xs={2} sm={6} md={8}>
                  <Grid container spacing={3}>
                    <Grid item xs={12} md={6}>
                      <p className="new-price">32.990.000đ</p>
                    </Grid>
                    <Grid item xs={2} md={6}>
                      <p className="old-price">33.990.000đ</p>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
              <Typography
                gutterBottom
                className="title"
                fontWeight="bold"
                fontSize={16}
              >
                Phiên bản máy
              </Typography>
              <ButtonGroup
                variant="contained"
                aria-label="outlined button group"
                sx={{ mt: 2, mb: 2 }}
              >
                <Button sx={{ mr: 1 }} variant="outlined">
                  8GB 26.390.000{" "}
                </Button>
                <Button sx={{ mr: 1 }} variant="outlined">
                  6GB 23.390.000
                </Button>
                <Button sx={{ mr: 1 }} variant="outlined">
                  6GB 23.390.000
                </Button>
              </ButtonGroup>

              <Grid container spacing={2} alignItems="center" className="order-button">
                <Grid item xs={8}>
                  <Button
                    fullWidth
                    variant="contained"
                    color="error"
                    sx={{ height: "70px" }}
                  >
                    Mua nhanh <br />
                    (giao nhanh 2h)
                  </Button>
                </Grid>
                <Grid item xs={4}>
                  <Button
                    fullWidth
                    variant="outlined"
                    size="small"
                    color="error"
                    startIcon={<ShoppingCartIcon />}
                    sx={{ height: "70px" }}
                  >
                    Thêm vào giỏ
                  </Button>
                </Grid>
              </Grid>

              <Grid container spacing={2} alignItems='center' sx={{ marginTop: '5px' }}>
              <Grid item xs={6}>
                  <Button
                    fullWidth
                    variant="contained"
                    color="info"
                    sx={{ height: "70px" }}
                  >
                    <Typography sx={{ fontSize: "13px" }} align='center'> <span>TRẢ GÓP 0%</span>   <br />
                    <span>(Xét duyệt qua điện thoại)  </span></Typography>
                  </Button>
                </Grid>
                <Grid item xs={6}>
                  <Button
                    fullWidth
                    variant="contained"
                    color="info"
                    sx={{ height: "70px" }}
                  >
                   <Typography sx={{ fontSize: "13px" }} align='center'> <span>TRẢ GÓP QUA THẺ</span>   <br />
                    <span >(Visa, Mastercard, JCB)  </span></Typography>
                  </Button>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={3} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h5" component="h1" gutterBottom>
                Thông tin chi tiết sản phẩm
              </Typography>
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
            </CardContent>
          </Card>
        </Grid>
      </Grid>{" "}
      <Grid container  spacing={0.5} direction="row" className="carousel" sx={12} >
      
      </Grid>

      */
    </div>
  );
}

export default ProductDetail;
