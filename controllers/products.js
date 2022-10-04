//FromS5
const { Sequelize, DataTypes, Op } = require('sequelize');
const Product = require('../models/products');

// create function
// http://localhost:3000/products/
/* {
	"id": 1,
	"title": "Sopa",
	"price": 8.5,
	"description": "Sopa descripción",
	"image_url0": "https://res.cloudinary.com/walmart-labs/image/upload/w_960,dpr_auto,f_auto,q_auto:best/gr/images/product-images/img_large/00750101831001L.jpg",
	"category_id": 2,
	"updatedAt": "2022-09-30T17:32:44.897Z",
	"createdAt": "2022-09-30T17:32:44.897Z"
} */
function createProduct(req, res) {
    const body = req.body;
    Product.create(body).then(product => {
        res.status(201).json(product);
    });
}

async function getProduct(req, res) {
    const id = req.params.id;
    const product = await Product.findByPk(id);
    res.status(200).json(product);
}

async function getProducts(req, res) {
    const products = await Product.findAll();
    res.status(200).json(products);    
}

async function updateProduct(req, res) {
    const id = req.params.id;
    const product = req.body;
    await Product.update(product, {where: {id: id}});
    const product_updated = await Product.findByPk(id);
    res.status(200).json(product_updated);
}

async function deleteProduct(req, res) {
    const id = req.params.id;
    const deleted = Product.destroy(
        {where: {id: id} }
    );
    res.status(200).json(deleted);
}

module.exports = {
    createProduct,
    getProduct,
    getProducts,
    updateProduct,
    deleteProduct
}