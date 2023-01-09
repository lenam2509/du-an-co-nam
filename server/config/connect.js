const mongoose = require('mongoose')

exports.dbConnect = () => {
    try {
        mongoose.connect(process.env.DB_URI)
        console.log('Ket noi DB thanh cong')
    } catch (error) {
        console.log('Khong the ket noi den DB')
    }
}