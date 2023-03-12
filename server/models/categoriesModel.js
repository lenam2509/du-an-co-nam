const monggoose = require('mongoose');

const categorySchema = new monggoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
}, {
    timestamps: true
});

const Categories = monggoose.model('Categories', categorySchema);

module.exports = Categories;