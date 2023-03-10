const mongoose = require('mongoose');

const brandsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
}, {
    timestamps: true
});

const specSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    value: {
        type: String,
        required: true,
        trim: true
    }
}, {
    timestamps: true
});


const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    price: {
        type: Number,
        required: true,
        min: 0
    },
    brand: {
        ref: 'Brands',
        type: mongoose.Schema.Types.ObjectId,
    },
    colors: {
        type: [String],
    },
    image: String,
    description: {
        type: String,
        trim: true
    },
    specs: [
        {
            ref: 'Specs',
            type: mongoose.Schema.Types.ObjectId
        }
    ]
}, {
    timestamps: true
});

const Specs = mongoose.model('Specs', specSchema);
const Products = mongoose.model('Products', productSchema);
const Brands = mongoose.model('Brands', brandsSchema);

module.exports = {
    Products,
    Specs,
    Brands
}
