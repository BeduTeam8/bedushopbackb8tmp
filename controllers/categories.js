//FromS5
const { Sequelize, DataTypes, Op } = require('sequelize');
const Category = require('../models/categories');

function createCategory(req, res) {
    const body = req.body;
    Category.create(body).then(category => {
        res.status(201).json(category);
    });
}

async function getCategory(req, res) {
    const id = req.params.id;
    const category = await Category.findByPk(id);
    res.status(200).json(category);
}

async function getCategories(req, res) {
    const categories = await Category.findAll();
    res.status(200).json(categories);    
}

async function updateCategory(req, res) {
    const id = req.params.id;
    const category = req.body;
    await Category.update(category, {where: {id: id}});
    const category_updated = await Category.findByPk(id);
    res.status(200).json(category_updated);
}

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