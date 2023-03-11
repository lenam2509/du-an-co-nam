const uploadCloud = require('../config/cloudinary.config');
const { Products, Brands, Specs } = require('../models/productsModel');
const cloudinary = require('cloudinary').v2;

exports.addProduct = async (req, res, next) => {
    try {
        const { name, price, brand, colors, description, specs } = req.body;
        const fileData = req.file;
        console.log(fileData);
        const image = fileData.path;
        const newProduct = await Products.create({ name, price, brand, colors, image, description, specs, imagePublicId: fileData.filename });
        res.status(201).json({ newProduct });
    } catch (error) {
        // remove image from cloudinary
        if (req.file) {
            await cloudinary.uploader.destroy(req.file.filename);

        }
        return res.status(500).json({ error: error.message });
    }
}

exports.getProducts = async (req, res, next) => {
    try {
        const products = await Products.find().populate('brand').populate('specs');
        res.status(200).json({ products });
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
        next(error);
    }
}

exports.updateProduct = async (req, res, next) => {
   
}
