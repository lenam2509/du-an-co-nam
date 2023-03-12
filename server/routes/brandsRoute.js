const { getAllBrands, addBrand, deleteBrand, updateBrand } = require('../controllers/brandsController');

const router = require('express').Router();


router.get('/', getAllBrands);
router.post('/', addBrand);
router.delete('/:id', deleteBrand);
router.put('/:id', updateBrand);



module.exports = router;