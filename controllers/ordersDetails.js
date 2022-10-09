//FromS5
const { Sequelize, DataTypes, Op } = require('sequelize');
const OrderDetails = require('../models/ordersDetails');

async function createOrderDetails(req, res) {
    const body = req.body;
    try{
    /*Arrrow Func first dev, 
    * move to asyncawait Server Validation 
    * Constraint returns properly form DB     
    OrderDetails.create(body).then(orderDetails => {
        res.status(201).json(orderDetails);
    });
    */
        const orderDetails = await OrderDetails.create(body);
        res.status(201).json(orderDetails);
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
async function getOrderDetails(req, res) {
    const id = req.params.id;
    const orderDetails = await OrderDetails.findByPk(id);
    res.status(200).json(orderDetails);
}

/*No validation required
* Returns Empty Brackets{} in case or a query all table returns empty.
* 				Brackets{all records in table}
*/
async function getOrderDetailss(req, res) {
    const orderDetailss = await OrderDetails.findAll();
    res.status(200).json(orderDetailss);    
}

async function updateOrderDetails(req, res) {
    const id = req.params.id;
    try{
    const orderDetails = req.body;
    await OrderDetails.update(orderDetails, {where: {id: id}});
    const orderDetails_updated = await OrderDetails.findByPk(id);
    res.status(200).json(orderDetails_updated);
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
async function deleteOrderDetails(req, res) {
    const id = req.params.id;
    const deleted = OrderDetails.destroy(
        {where: {id: id} }
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