const Order = require('../models/orders');

function createOrder(req, res) {
    const body = req.body;
    Order.create(body).then(order => {
        res.status(201).json(order);
    });
}

async function getOrder(req, res) {
    const id = req.params.id;
    const order = await Order.findByPk(id);
    res.status(200).json(order);
}

async function getOrders(req, res) {
    const orders = await Order.findAll();
    res.status(200).json(orders);    
}

async function updateOrder(req, res) {
    const id = req.params.id;
    const order = req.body;
    await Order.update(order, {where: {id}});
    const order_updated = await Order.findByPk(id);
    res.status(200).json(order_updated);
}

async function deleteOrder(req, res) {
    const id = req.params.id;
    const deleted = Order.destroy(
        {where: {id} }
    );
    res.status(200).json(deleted);
}

module.exports = {
    createOrder,
    getOrder,
    getOrders,
    updateOrder,
    deleteOrder
}