//FromS5
const { Sequelize, DataTypes, Op } = require('sequelize');
const Category = require('../models/categories');

// create function
//http://localhost:3000/v1/categories/
/* {
	"category": "Abarrotes",
	"imagecategory_url0": "https://abarrotero.com/wp-content/uploads/2019/04/productos_tienda_abarrotes_abarrotero.jpg"
} */
function createCategory(req, res) {
    const body = req.body;
    Category.create(body).then(category => {
        res.status(201).json(category);
    });
}

// get singular function
// http://localhost:3000/categories/1
async function getCategory(req, res) {
    const id = req.params.id;
    const category = await Category.findByPk(id);
    res.status(200).json(category);
}

// get multiple function
// http://localhost:3000/categories
async function getCategories(req, res) {
    const categories = await Category.findAll();
    res.status(200).json(categories);    
}

// update function
// http://localhost:3000/categories/1
/* {
	"category": "Abarrotes1"
} */
async function updateCategory(req, res) {
    const id = req.params.id;
    const category = req.body;
    await Category.update(category, {where: {id: id}});
    const category_updated = await Category.findByPk(id);
    res.status(200).json(category_updated);
}

// delete function
async function deleteCategory(req, res) {
    const id = req.params.id;
    const deleted = Category.destroy(
        {where: {id: id} }
    );
    res.status(200).json(deleted);
}

module.exports = {
    createCategory,
    getCategory,
    getCategories,
    updateCategory,
    deleteCategory
}