//FromS5
const { Sequelize, DataTypes, Op } = require('sequelize');
const UserType = require('../models/userTypes');

function createUserType(req, res) {
    const body = req.body;
    UserType.create(body).then(userType => {
        res.status(201).json(userType);
    });
}

async function getUserType(req, res) {
    const id = req.params.id;
    const userType = await UserType.findByPk(id);
    res.status(200).json(userType);
}

async function getUserTypes(req, res) {
    const userTypes = await UserType.findAll();
    res.status(200).json(userTypes);    
}

async function updateUserType(req, res) {
    const id = req.params.id;
    const userType = req.body;
    await UserType.update(userType, {where: {id: id}});
    const userType_updated = await UserType.findByPk(id);
    res.status(200).json(userType_updated);
}

async function deleteUserType(req, res) {
    const id = req.params.id;
    const deleted = UserType.destroy(
        {where: {id: id} }
    );
    res.status(200).json(deleted);
}

module.exports = {
    createUserType,
    getUserType,
    getUserTypes,
    updateUserType,
    deleteUserType
}