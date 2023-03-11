const router = require('express').Router();
const uploadCloud = require('../config/cloudinary.config');
const { addProduct, getProducts, updateProduct, deleteProduct, addBrand, getBrands } = require('../controllers/productsController');

router.post('/', uploadCloud.single('image'), addProduct);
// router.post('/brand', addBrand);
router.get('/', getProducts);
// router.get('/brand', getBrands);
router.put('/:id', updateProduct);
router.delete('/:id', deleteProduct);

module.exports = router;