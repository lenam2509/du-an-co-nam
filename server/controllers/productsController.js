const { Products, Brands, Specs } = require('../models/productsModel');

module.exports = {
    addProduct: async (req, res) => {
        try {
            const newProduct = new Products(req.body);
            await newProduct.save();
            res.status(200).json({ msg: 'Thêm sản phẩm thành công' });
        } catch (error) {
            return res.status(500).json({ msg: error.message });
        }
    },
    getProducts: async (req, res) => {
        try {
            const products = await Products.find().populate('brand');
            
            res.json(products);
        } catch (error) {
            return res.status(500).json({ msg: error.message });
        }
    },
    updateProduct: async (req, res) => {
        const { name, price, brand, colors, image, description, specs } = req.body;
        try {
            const product = await Product.findById(req.params.id);
            if (!product) return res.status(400).json({ msg: 'Sản phẩm không tồn tại' });
            await Product.findOneAndUpdate({ _id: req.params.id }, {
                name: name ? name : product.name,
                price: price ? price : product.price,
                brand: brand ? brand : product.brand,
                colors: colors ? colors : product.colors,
                image: image ? image : product.image,
                description: description ? description : product.description,
                specs: specs ? specs : product.specs
            });
            res.json({ msg: 'Cập nhật sản phẩm thành công' });
        } catch (error) {
            return res.status(500).json({ msg: error.message });
        }
    },
    deleteProduct: async (req, res) => {

    },
    // brands
    addBrand: async (req, res) => {
        try {
            const newBrand = new Brands(req.body);
            await newBrand.save();
            res.status(200).json({ msg: 'Thêm thương hiệu thành công' });
        } catch (error) {
            return res.status(500).json({ msg: error.message });
        }
    },
    getBrands: async (req, res) => {
        try {
            const brands = await Brands.find();
            res.json(brands);
        } catch (error) {
            return res.status(500).json({ msg: error.message });
        }
    },
}