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
async function createProduct(req, res) {
    const body = req.body;
    try{
    /*Arrrow Func first dev, 
    * move to asyncawait Server Validation 
    * Constraint returns properly form DB 
    Product.create(body).then(product => {
        res.status(201).json(product);
    }); 
    * */
        const product = await Product.create(body);
        res.status(201).json(product);
    } catch (err) {
        if (
            ["SequelizeValidationError", "SequelizeUniqueConstraintError"].includes(
                err.name
            )
        ) {
            return res.status(400).json({
                error: err.errors.map((e) => e.message),
            });
        } else {
            throw err;
        }
    }
}

/*No validation required
* Returns Empty Brackets{} in case or a query where id to table returns empty.
* 				Brackets{id record in table}
*/
async function getProduct(req, res) {
    const id = req.params.id;
    const product = await Product.findByPk(id);
    res.status(200).json(product);
}

/*No validation required
* Returns Empty Brackets{} in case or a query all table returns empty.
* 				Brackets{all records in table}
*/
async function getProducts(req, res) {
    const products = await Product.findAll();
    res.status(200).json(products);    
}

async function updateProduct(req, res) {
    const id = req.params.id;
    try{
    const product = req.body;
    await Product.update(product, {where: {id: id}});
    const product_updated = await Product.findByPk(id);
    res.status(200).json(product_updated);
    } catch (err) {
        if (
            ["SequelizeValidationError", "SequelizeUniqueConstraintError"].includes(
                err.name
            )
        ) {
            return res.status(400).json({
                error: err.errors.map((e) => e.message),
            });
        } else {
            throw err;
        }
    }
}

/*No validation performed, if userExists, if id exists in DB
* Either way the DB returna 200 Error Code
* Only if a GetAll or GetById call return if user exists
*/
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