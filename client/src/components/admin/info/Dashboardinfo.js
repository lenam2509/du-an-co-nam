import React from 'react'
import './dasboardinfo.css'
import { ArrowDownward, ArrowUpward } from '@mui/icons-material'
export default function Dashboardinfo() {
    return (
        <div className='info'>
            <div className="infoItems">
                <span className="infoTitle">Doanh thu tháng này</span>
                <div className="infobox1">
                    <span className="info1Title">$2.40</span>
                    <span className="info1Rate">+1.40 <ArrowUpward className='infoIcon' /> </span>
                </div>
            </div>
            <div className="infoItems">
                <span className="infoTitle">Tổng hóa đơn đã thanh toán</span>
                <div className="infobox1">
                    <span className="info1Title">10</span>
                    <span className="info1Rate">+5<ArrowUpward className='infoIcon' /> </span>
                </div>
            </div>
            <div className="infoItems">
                <span className="infoTitle">Tổng sản phẩm trong kho</span>
                <div className="infobox1">
                    <span className="info1Title">100</span>
                    <span className="info1Rate">-100 <ArrowDownward className='infoIcon down' /> </span>
                </div>
            </div>
        </div>
    )
}
