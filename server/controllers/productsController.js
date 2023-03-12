const uploadCloud = require('../config/cloudinary.config');
const { Products, } = require('../models/productsModel');
const cloudinary = require('cloudinary').v2;

exports.addProduct = async (req, res, next) => {
    try {
        const fileData = req.files;
        const images = await fileData.map((file) => {
            return {
                url: file.path,
                public_id: file.filename
            }
        });
        // console.log(fileData);
        const newProduct = await Products.create({
            title: req.body.title,
            price: req.body.price,
            brand: req.body.brand,
            colors: req.body.colors,
            images: images,
            totalRatings: req.body.totalRatings,
            ratings: req.body.ratings,
            description: req.body.description,
            stock: req.body.stock,
            sold: req.body.sold,
            specs: req.body.specs,
        });
        res.status(201).json(newProduct);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};


exports.getProducts = async (req, res, next) => {
    try {
        const products = await Products.find().populate('brand');
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

exports.deleteProduct = async (req, res, next) => {
    try {
        const { id } = req.params;
        const product = await Products.findByIdAndDelete(id);
        if (!product) {
            return res.status(404).json({ error: 'Product not found' });
        }
        // remove image from cloudinary
        await cloudinary.uploader.destroy(product.imagePublicId);
        res.status(200).json('Product deleted');
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

exports.updateProduct = async (req, res, next) => {
    try {
        const { id } = req.params;
        const { name, price, brand, colors, description, specs } = req.body;
        const fileData = req.file;
        const image = fileData.path;
        if (image) {
            const newProduct = await Products.findOneAndUpdate(id,
                { name, price, brand, colors, image, description, specs, imagePublicId: fileData.filename },
            )
            res.status(200).json({ newProduct });
        } else {
            const newProduct = await Products.findOneAndUpdate(id,
                { name, price, brand, colors, description, specs },
            )
            res.status(200).json({ newProduct });
        }
    }
    catch (error) {
        return res.status(500).json({ error: error.message });
    }
}
