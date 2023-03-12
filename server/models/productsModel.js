const mongoose = require('mongoose');


const productSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true,
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
    category: {
        ref: 'Categories',
        type: mongoose.Schema.Types.ObjectId,
    },
    colors: {
        type: [String],
    },
    images: [
        {
            url: { type: String },
            public_id: { type: String }
        }
    ],

    totalRatings: {
        type: Number,
        default: 0
    },
    ratings: [
        {
            type: Number,
            min: 0,
            max: 5
        }
    ],
    description: {
        type: String,
        trim: true
    },
    stock: {
        type: Number,
        required: true,
        min: 0
    },
    sold: {
        type: Number,
        default: 0
    },
    specs: {
        type: Object,
    },
    hot: {
        type: Boolean,
        default: false
    },
}, {
    timestamps: true
});


const Products = mongoose.model('Products', productSchema);


module.exports = {
    Products
}
