const router = require("express").Router();
const auth = require("../config/auth");

const {
	createCart,
	getCart,
	getCarts,
	updateCart,
	deleteCart,
} = require("../controllers/carts");

// swagger documentation
/**
 * @swagger
 * /v1/carts:
 *  get:
 *    tags:
 *      - Carts
 *    summary: cart list
 *    description: get the full list of carts
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
router.get("/", auth.admin, getCarts);

/**
 * @swagger
 * /v1/carts/{id}:
 *  get:
 *    tags:
 *      - Carts
 *    summary: cart list
 *    description: get the full list of carts
 *    parameters:
 *     - name: id
 *       in: path
 *       description: product id that needs to be fetched
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
router.get("/:id", auth.Userid, getCart);

/**
 * @swagger
 * /v1/carts:
 *  post:
 *    tags:
 *      - Carts
 *    summary: edit cart list
 *    description: edit the full list of carts
 *    requestBody:
 *      description: user object that will be created and added to the database
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Carts'
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
router.post("/", auth.Buyer, createCart);

/**
 * @swagger
 * /v1/carts/{id}:
 *  patch:
 *    tags:
 *      - Carts
 *    summary: edit cart list
 *    description: edit the full list of carts
 *    parameters:
 *     - name: id
 *       in: path
 *       description: cart id that needs to be fetched
 *       required: true
 *       schema:
 *         type: integer
 *         format: int64
 *    requestBody:
 *      description: user object that will be created and added to the database
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Carts'
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
router.patch("/:id", auth.Buyer, auth.Userid, updateCart);

/**
 * @swagger
 * /v1/carts/{id}:
 *  delete:
 *    tags:
 *      - Carts
 *    summary: delete list
 *    description: delete a cart
 *    parameters:
 *     - name: id
 *       in: path
 *       description: product id that needs to be fetched
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
router.delete("/:id", auth.Buyer, auth.Userid, deleteCart);

module.exports = router;

/**
 * @swagger
 * components:
 *  schemas:
 *    Carts:
 *      type: object
 *      properties:
 *        product_id:
 *          type: integer
 *          example: 5
 *        user_id:
 *          type: integer
 *          example: 3
 *        quantity:
 *          type: integer
 *          example: 5
 *        price:
 *          type: integer
 *          example: 420.69
 */
