const { getAllCategories, addCategory, deleteCategory, updateCategory } = require('../controllers/categoriesController');

const router = require('express').Router();

router.get('/', getAllCategories)
router.post('/', addCategory)
router.delete('/:id', deleteCategory)
router.put('/:id', updateCategory)

module.exports = router;