const Categories = require("../models/categoriesModel");

exports.getAllCategories = async (req, res) => {
    try {
        const categories = await Categories.find();
        res.status(200).json(categories);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

exports.addCategory = async (req, res) => {
    try {
        const { title } = req.body;
        const newCategory = await Categories.create({ title });
        res.status(200).json(newCategory);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

exports.deleteCategory = async (req, res) => {
    try {
        const { id } = req.params;
        const category = await Categories.findByIdAndDelete(id);
        if (!category) {
            return res.status(404).json({ error: 'Category not found' });
        }
        res.status(200).json('Category deleted');
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

exports.updateCategory = async (req, res) => {
    try {
        const { id } = req.params;
        const { title } = req.body;
        const category = await Categories.findByIdAndUpdate(id, { title });
        if (!category) {
            return res.status(404).json({ error: 'Category not found' });
        }
        res.status(200).json(category);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}