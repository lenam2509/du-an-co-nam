import React from 'react'
import "./chart.css"
import { LineChart, Line, XAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

export default function Chart() {
    const data = [
        {
            name: 'Tháng 1',
            uv: 4000,
            pv: 2400,
            amt: 2400,
        },
        {
            name: 'Tháng 2',
            uv: 3000,
            pv: 1398,
            amt: 2210,
        },
        {
            name: 'Tháng 3',
            uv: 2000,
            pv: 9800,
            amt: 2290,
        },
        {
            name: 'Tháng 4',
            uv: 2780,
            pv: 3908,
            amt: 2000,
        },
        {
            name: 'Tháng 5',
            uv: 1890,
            pv: 4800,
            amt: 2181,
        },
        {
            name: 'Tháng 6',
            uv: 2390,
            pv: 3800,
            amt: 2500,
        },
        {
            name: 'Tháng 7',
            uv: 3490,
            pv: 4300,
            amt: 2100,
        },
        {
            name: 'Tháng 8',
            uv: 3490,
            pv: 4300,
            amt: 2100,
        },
        {
            name: 'Tháng 9',
            uv: 3490,
            pv: 4300,
            amt: 2100,
        },
        {
            name: 'Tháng 10',
            uv: 3490,
            pv: 4300,
            amt: 2100,
        },
        {
            name: 'Tháng 11',
            uv: 3490,
            pv: 4300,
            amt: 2100,
        },
        {
            name: 'Tháng 12',
            uv: 3490,
            pv: 4300,
            amt: 2100,
        },
    ];
    return (
        <div className='chart'>
            <h3 className="chartTitle">
                Biểu đồ doanh thu
            </h3>
            <ResponsiveContainer width='100%' aspect={4 / 1}>
                <LineChart data={data}>
                    <XAxis dataKey='name' />
                    <Line type="monotone" dataKey='uv' />
                    <Tooltip />
                    <CartesianGrid/>
                </LineChart>
            </ResponsiveContainer>
        </div>
    )
}
