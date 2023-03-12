const router = require('express').Router();
const uploadCloud = require('../config/cloudinary.config');
const { addProduct, getProducts, updateProduct, deleteProduct } = require('../controllers/productsController');

router.post('/', uploadCloud.array('images'), addProduct);
router.get('/', getProducts);
router.put('/:id', updateProduct);
router.delete('/:id', deleteProduct);

module.exports = router;