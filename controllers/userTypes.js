//FromS5
const { Sequelize, DataTypes, Op } = require('sequelize');
const UserType = require('../models/userTypes');

async function createUserType(req, res) {
    const body = req.body;
    try{
        /* Change arrow Func to async/await
        UserType.create(body).then(userType => {
            res.status(201).json(userType);
        });
        */

        const userType = await UserType.create(body);
        res.status(201).json(userType);
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
async function getUserType(req, res) {
    const id = req.params.id;
    const userType = await UserType.findByPk(id);
    res.status(200).json(userType);
}

/*No validation required
* Returns Empty Brackets{} in case or a query all table returns empty.
* 				Brackets{all records in table}
*/
async function getUserTypes(req, res) {
    const userTypes = await UserType.findAll();
    res.status(200).json(userTypes);    
}

async function updateUserType(req, res) {
    const id = req.params.id;
    try{
    const userType = req.body;
    await UserType.update(userType, {where: {id: id}});
    const userType_updated = await UserType.findByPk(id);
    res.status(200).json(userType_updated);
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