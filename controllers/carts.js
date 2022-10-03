//FromS5
const { Sequelize, DataTypes, Op } = require('sequelize');
const Cart = require('../models/carts');

function createCart(req, res) {
    const body = req.body;
    Cart.create(body).then(cart => {
        res.status(201).json(cart);
    });
}

async function getCart(req, res) {
    const id = req.params.id;
    const cart = await Cart.findByPk(id);
    res.status(200).json(cart);
}

async function getCarts(req, res) {
    const carts = await Cart.findAll();
    res.status(200).json(carts);    
}

async function updateCart(req, res) {
    const id = req.params.id;
    const cart = req.body;
    await Cart.update(cart, {where: {id: id}});
    const cart_updated = await Cart.findByPk(id);
    res.status(200).json(cart_updated);
}

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