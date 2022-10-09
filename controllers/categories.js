//FromS5
const { Sequelize, DataTypes, Op } = require('sequelize');
const Category = require('../models/categories');

// create function
//http://localhost:3000/v1/categories/
/* {
	"category": "Abarrotes",
	"imagecategory_url0": "https://abarrotero.com/wp-content/uploads/2019/04/productos_tienda_abarrotes_abarrotero.jpg"
} */

// DB validation on Unique attibutes that other users have already taken.
async function createCategory(req, res) {
    const body = req.body;
    if (!body['category']) {
		return res.status(400).json({ error: "category field, undefined ot empty" });
	}
    try{
    /*Arrrow Func first dev, 
    * move to asyncawait Server Validation 
    * Constraint returns properly form DB
    * Category.create(body).then(category => {
    *    res.status(201).json(category);
    * });
    */
        const category = await Category.create(body);
        res.status(201).json(category);
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

// get singular function
// http://localhost:3000/categories/1

/*No validation required
* Returns Empty Brackets{} in case or a query where id to table returns empty.
* 				Brackets{id record in table}
*/
async function getCategory(req, res) {
    const id = req.params.id;
    const category = await Category.findByPk(id);
    res.status(200).json(category);
}

// get multiple function
// http://localhost:3000/categories

/*No validation required
* Returns Empty Brackets{} in case or a query all table returns empty.
* 				Brackets{all records in table}
*/
async function getCategories(req, res) {
    const categories = await Category.findAll();
    res.status(200).json(categories);    
}

// update function
// http://localhost:3000/categories/1
/* {
	"category": "Abarrotes1"
} */

async function updateCategory(req, res) {
    const id = req.params.id;
    try{
        const category = req.body;
        await Category.update(category, {where: {id: id}});
        const category_updated = await Category.findByPk(id);
        res.status(200).json(category_updated);
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