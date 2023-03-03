import React from 'react'
import { DataGrid } from '@mui/x-data-grid';
function Products() {
    const rows = [
        { id: 1, col1: 'Hello', col2: 'World' },
        { id: 2, col1: 'XGrid', col2: 'is Awesome' },
        { id: 3, col1: 'Material-UI', col2: 'is Amazing' },
        { id: 4, col1: 'Hello', col2: 'World' },
        { id: 5, col1: 'XGrid', col2: 'is Awesome' },
        { id: 6, col1: 'Material-UI', col2: 'is Amazing' },
    ];

    const columns = [
        { field: 'col1', headerName: 'Tên sản phẩm', width: 150 },
        { field: 'col2', headerName: 'Hình', width: 150 },
        { field: 'col3', headerName: 'Giá', width: 150 },
        { field: 'col4', headerName: 'Số lượng', width: 150 },
        { field: 'col5', headerName: 'Mô tả', width: 150 },
        { field: 'col6', headerName: 'Loại sản phẩm', width: 150 },
        { field: 'col7', headerName: 'Thương hiệu', width: 150 },
        { field: 'col8', headerName: 'Thao tác', width: 150 },
    ];
    return (
        <div style={
            {
                height: 400,
                width: '100%',
            }
        }>
            <DataGrid rows={rows} columns={columns} pageSize={5} checkboxSelection />
        </div>
    )
}

export default Products