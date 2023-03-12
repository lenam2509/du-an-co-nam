const mongoose = require('mongoose');

const brandsSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
}, {
    timestamps: true
});

const Brands = mongoose.model('Brands', brandsSchema);

module.exports = Brands;