const Brands = require('../models/brandsModel');
const Products = require('../models/productsModel');

exports.getAllBrands = async (req, res, next) => {
    try {
        const brands = await Brands.find();
        res.status(200).json(brands);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

exports.addBrand = async (req, res, next) => {
    try {
        const { title } = req.body;
        const newBrand = await Brands.create({ title });
        res.status(200).json(newBrand);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

exports.deleteBrand = async (req, res, next) => {
    try {
        const { id } = req.params;
        const brand = await Brands.findByIdAndDelete(id);
        // remove brand from products
        await Products.updateMany({ brand: id }, { brand: null })
        if (!brand) {
            return res.status(404).json({ error: 'Brand not found' });
        }
        res.status(200).json('Brand deleted');
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

exports.updateBrand = async (req, res, next) => {
    try {
        const { id } = req.params;
        const { title } = req.body;
        const newBrand = await Brands.findByIdAndUpdate(id, { title });
        if (!newBrand) {
            return res.status(404).json({ error: 'Brand not found' });
        }
        res.status(200).json(newBrand);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}