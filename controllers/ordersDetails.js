const OrderDetails = require('../models/ordersDetails');

function createOrderDetails(req, res) {
    const body = req.body;
    OrderDetails.create(body).then(orderDetails => {
        res.status(201).json(orderDetails);
    });
}

async function getOrderDetails(req, res) {
    const id = req.params.id;
    const orderDetails = await OrderDetails.findByPk(id);
    res.status(200).json(orderDetails);
}

async function getOrderDetailss(req, res) {
    const orderDetailss = await OrderDetails.findAll();
    res.status(200).json(orderDetailss);    
}

async function updateOrderDetails(req, res) {
    const id = req.params.id;
    const orderDetails = req.body;
    await OrderDetails.update(orderDetails, {where: {id}});
    const orderDetails_updated = await OrderDetails.findByPk(id);
    res.status(200).json(orderDetails_updated);
}

async function deleteOrderDetails(req, res) {
    const id = req.params.id;
    const deleted = OrderDetails.destroy(
        {where: {id} }
    );
    res.status(200).json(deleted);
}

module.exports = {
    createOrderDetails,
    getOrderDetails,
    getOrderDetailss,
    updateOrderDetails,
    deleteOrderDetails
}