const { Sequelize, DataTypes, Op } = require('sequelize');
const Cart = require('../models/carts');

async function createCart(req, res) {
    const body = req.body;
   
    if (!body['quantity']||!body['price']) {
		return res.status(400).json({ error: "Quantity AND Price field, undefined or empty" });
	}
    try{ 
    /*Arrrow Func first dev, 
    * move to asyncawait Server Validation 
    * Constraint returns properly form DB 
    Cart.create(body).then(cart => {
        res.status(201).json(cart);
    });
    */
        const cart = await Cart.create(body);
        res.status(201).json(cart);
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
async function getCart(req, res) {
    const id = req.params.id;
    const cart = await Cart.findByPk(id);
    res.status(200).json(cart);
}

/*No validation required
* Returns Empty Brackets{} in case or a query all table returns empty.
* 				Brackets{all records in table}
*/
async function getCarts(req, res) {
    const carts = await Cart.findAll();
    res.status(200).json(carts);    
}

async function updateCart(req, res) {
    const id = req.params.id;
    try{
    const cart = req.body;
    await Cart.update(cart, {where: {id: id}});
    const cart_updated = await Cart.findByPk(id);
    res.status(200).json(cart_updated);
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
async function deleteCart(req, res) {
    const id = req.params.id;
    const deleted = Cart.destroy(
        {where: {id: id} }
    );
    res.status(200).json(deleted);
}

module.exports = {
    createCart,
    getCart,
    getCarts,
    updateCart,
    deleteCart
}