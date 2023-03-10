const router = require('express').Router();

const { addProduct, getProducts, updateProduct, deleteProduct, addBrand, getBrands } = require('../controllers/productsController');

router.post('/', addProduct);
router.post('/brand', addBrand);
router.get('/', getProducts);
router.get('/brand', getBrands);
router.put('/:id', updateProduct);
router.delete('/:id', deleteProduct);

module.exports = router;