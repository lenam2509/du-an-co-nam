import React from 'react'
import { Link } from 'react-router-dom'
import { TextRotateVertical, Visibility, AttachMoney, FilterAlt } from '@mui/icons-material'
import './products.css'
import ProductCard from '../../../components/client/Product-card/Productcard'
function ClientProducts() {
    const [filter, setFilter] = React.useState(false)

    const handleFilter = () => {
        setFilter(!filter)
    }
    // if the page is reloaded, the filter will be closed
    React.useEffect(() => {
        setFilter(false)
    }, [])
    return (
        <div className='Products_container'>
            <div className="products_branch">
                <div className="products_branch_title">
                    Chọn theo hãng
                </div>
                <div className="products_branch_items">
                    <Link><img src="/images/apple.png" alt="apple" /></Link>
                    <Link><img src="/images/samsung.png" alt="apple" /></Link>
                    <Link><img src="/images/vivo.png" alt="apple" /></Link>
                    <Link><img src="/images/nokia.png" alt="apple" /></Link>
                    <Link><img src="/images/realme.png" alt="apple" /></Link>
                    <Link><img src="/images/asus.png" alt="apple" /></Link>
                    <Link><img src="/images/oneplus.png" alt="apple" /></Link>
                    <Link><img src="/images/nuoiq.png" alt="apple" /></Link>
                    <Link><img src="/images/tecnno.png" alt="apple" /></Link>
                </div>
            </div>
            <div className="products_nhucau">
                <div className="products_nhucau_title">
                    Chọn theo nhu cầu
                </div>
                <div className="products_nhucau_items">
                    <Link>
                        <div className="products_nhucau_item" style={{ backgroundImage: 'url(images/nhucau1.png)' }}>
                            <span>Chơi game</span>
                        </div>
                    </Link>
                    <Link>
                        <div className="products_nhucau_item" style={{ backgroundImage: 'url(images/nhucau2.png)' }}>
                            <span>Pin trâu</span>
                        </div>
                    </Link>
                    <Link>
                        <div className="products_nhucau_item" style={{ backgroundImage: 'url(images/nhucau3.png)' }}>
                            <span>Dung lượng lớn</span>
                        </div>
                    </Link>
                    <Link>
                        <div className="products_nhucau_item" style={{ backgroundImage: 'url(images/nhucau4.png)' }}>
                            <span>Cấu hình cao</span>
                        </div>
                    </Link>
                    <Link>
                        <div className="products_nhucau_item" style={{ backgroundImage: 'url(images/nhucau5.png)' }}>
                            <span>Mỏng nhẹ</span>
                        </div>
                    </Link>
                    <Link>
                        <div className="products_nhucau_item" style={{ backgroundImage: 'url(images/nhucau6.png)' }}>
                            <span>Chụp ảnh đẹp</span>
                        </div>
                    </Link>
                </div>
            </div>
            <div className="products_sapxep">
                <div className="products_sapxep_title">
                    Sắp xếp theo
                </div>
                <div className="products_sapxep_items">
                    <Link> <TextRotateVertical /> Giá Cao-Thấp</Link>
                    <Link> <TextRotateVertical /> Giá Thấp-Cao</Link>
                    <Link> <AttachMoney />Khuyến mãi HOT</Link>
                    <Link><Visibility /> Xem nhiều</Link>
                    <button onClick={handleFilter}><FilterAlt />Bộ lọc</button>
                </div>
                <div className={
                    filter ? 'products_sapxep_filter' : 'products_sapxep_filter products_sapxep_filter_close'
                }>
                    <div className="filter_wraper">
                        <div className="filter_title">
                            Nhu cầu sử dụng
                        </div>
                        <ul>
                            <li>chơi game</li>
                            <li>pin trâu</li>
                            <li>dung lượng lớn</li>
                            <li>Cấu hình cao</li>
                            <li>mỏng nhẹ</li>
                            <li>chụp ảnh đẹp</li>
                        </ul>
                    </div>
                    <div className="filter_wraper">
                        <div className="filter_title">
                            Loại điện thoại
                        </div>
                        <ul>
                            <li>Android</li>
                            <li>Iphone</li>
                            <li>Điện thoại phổ thông</li>
                        </ul>
                    </div>
                    <div className="filter_wraper">
                        <div className="filter_title">
                            Dung lượng RAM
                        </div>
                        <ul>
                            <li>Dưới 4GB</li>
                            <li>4GB-6GB</li>
                            <li>8GB-12GB</li>
                            <li>12GB trở lên</li>
                        </ul>
                    </div>
                    <div className="filter_wraper">
                        <div className="filter_title">
                            Tính năng đặc biệt
                        </div>
                        <ul>
                            <li>Sạc không dây</li>
                            <li>4GB-6GB</li>
                            <li>8GB-12GB</li>
                            <li>12GB trở lên</li>
                        </ul>
                    </div>
                    <div className="filter_wraper">
                        <div className="filter_title">
                            Tính năng camera
                        </div>
                        <ul>
                            <li>Chụp xóa phong</li>
                            <li>Chụp góc rộng</li>
                            <li>Quay video 4k</li>
                            <li>Chụp zoom xa</li>
                            <li>Chụp marco</li>
                            <li>Chống rung</li>
                        </ul>
                    </div>
                    <div className="filter_wraper">
                        <div className="filter_title">
                            Dung lượng RAM
                        </div>
                        <ul>
                            <li>Dưới 4GB</li>
                            <li>4GB-6GB</li>
                            <li>8GB-12GB</li>
                            <li>12GB trở lên</li>
                        </ul>
                    </div>
                    <div className="filter_wraper">
                        <div className="filter_title">
                            Dung lượng RAM
                        </div>
                        <ul>
                            <li>Dưới 4GB</li>
                            <li>4GB-6GB</li>
                            <li>8GB-12GB</li>
                            <li>12GB trở lên</li>
                        </ul>
                    </div>
                    <div className="filter_wraper">
                        <div className="filter_title">
                            Dung lượng RAM
                        </div>
                        <ul>
                            <li>Dưới 4GB</li>
                            <li>4GB-6GB</li>
                            <li>8GB-12GB</li>
                            <li>12GB trở lên</li>
                        </ul>
                    </div>
                    <div className="filter_wraper">
                        <div className="filter_title">
                            Dung lượng RAM
                        </div>
                        <ul>
                            <li>Dưới 4GB</li>
                            <li>4GB-6GB</li>
                            <li>8GB-12GB</li>
                            <li>12GB trở lên</li>
                        </ul>
                    </div>
                </div>

            </div>
            <div className="products_list_all">
                 <ProductCard/>
                 <ProductCard/>
                 <ProductCard/>
                 <ProductCard/>
                 <ProductCard/>
                 <ProductCard/>
            </div>
        </div>
    )
}

export default ClientProducts