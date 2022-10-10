const router = require("express").Router();
const auth = require("../config/auth");

const {
	createCategory,
	getCategory,
	getCategories,
	updateCategory,
	deleteCategory,
} = require("../controllers/categories");

// swagger documentation
/**
 * @swagger
 * /v1/categories:
 *  get:
 *    tags:
 *      - Catagories
 *    summary: catagories list
 *    description: get the list of catagories
 *    responses:
 *      200:
 *        description: a welcome message
 *      401:
 *        description: unauthorized you need to be an admin
 *      403:
 *        description: forbidden
 */
router.get("/", getCategories);

// swagger documentation
/**
 * @swagger
 * /v1/categories/{id}:
 *  get:
 *    tags:
 *      - Catagories
 *    summary: catagories list
 *    description: get the list of catagories
 *    parameters:
 *     - name: id
 *       in: path
 *       description: catagory id that needs to be fetched
 *       required: true
 *       schema:
 *         type: integer
 *         format: int64
 *    responses:
 *      200:
 *        description: a welcome message
 *      401:
 *        description: unauthorized you need to be an admin
 *      403:
 *        description: forbidden
 */
router.get("/:id", getCategory);

/**
 * @swagger
 * /v1/categories:
 *  post:
 *    tags:
 *      - Catagories
 *    summary: create catagory
 *    description: create a new catagory
 *    requestBody:
 *      description: user object that will be created and added to the database
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Catagory'
 *    responses:
 *      200:
 *        description: a welcome message
 *      401:
 *        description: unauthorized you need to be an admin
 *      403:
 *        description: forbidden
 *    security:
 *     - bearerAuth: []
 */
router.post("/", auth.seller, createCategory);

/**
 * @swagger
 * /v1/categories/{id}:
 *  patch:
 *    tags:
 *      - Catagories
 *    summary: edit catagory
 *    description: edit a catagory for admins only
 *    parameters:
 *     - name: id
 *       in: path
 *       description: catagory id that needs to be fetched
 *       required: true
 *       schema:
 *         type: integer
 *         format: int64
 *    requestBody:
 *      description: catagory object that will be edited and added to the database
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Catagory'
 *    responses:
 *      200:
 *        description: a welcome message
 *      401:
 *        description: unauthorized you need to be an admin
 *      403:
 *        description: forbidden
 *    security:
 *     - bearerAuth: []
 */
router.patch("/:id", auth.admin, updateCategory);

/**
 * @swagger
 * /v1/categories/{id}:
 *  delete:
 *    tags:
 *      - Catagories
 *    summary: delete catagory for admins only
 *    description: delete a catagory
 *    parameters:
 *     - name: id
 *       in: path
 *       description: catagory id that needs to be fetched
 *       required: true
 *       schema:
 *         type: integer
 *         format: int64
 *    responses:
 *      200:
 *        description: a welcome message
 *      401:
 *        description: unauthorized you need to be an admin
 *      403:
 *        description: forbidden
 *    security:
 *     - bearerAuth: []
 */
router.delete("/:id", auth.admin, deleteCategory);

module.exports = router;

/**
 * @swagger
 * components:
 *  schemas:
 *    Catagory:
 *      type: object
 *      properties:
 *        category:
 *          type: string
 *          example: "Electronics"
 *        imagecategory_url0:
 *          type: string
 *          example: "https://api.lorem.space/image/fashion?w=640&h=480&r=6072"
 */
