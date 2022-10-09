const router = require("express").Router();
const auth = require("../config/auth");

const {
	createOrder,
	getOrder,
	getOrders,
	updateOrder,
	deleteOrder,
} = require("../controllers/orders");

// swagger documentation
/**
 * @swagger
 * /v1/orders:
 *  get:
 *    tags:
 *      - Orders
 *    summary: Orders list
 *    description: get the full list of Orders
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

router.get("/", auth.logedIn, getOrders);

// swagger documentation
/**
 * @swagger
 * /v1/orders/{id}:
 *  get:
 *    tags:
 *      - Orders
 *    summary: Orders list
 *    description: get the full list of Orders
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
router.get("/:id", auth.logedIn, getOrder);

// swagger documentation
/**
 * @swagger
 * /v1/orders:
 *  post:
 *    tags:
 *      - Orders
 *    summary: create order
 *    description: create an Orders
 *    requestBody:
 *      description: Order object that will be created and added to the database
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Orders'
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
router.post("/", auth.logedIn, createOrder);

/**
 * @swagger
 * /v1/orders/{id}:
 *  patch:
 *    tags:
 *      - Orders
 *    summary: Edit order
 *    description: Edit an Orders
 *    parameters:
 *     - name: id
 *       in: path
 *       description: product id that needs to be fetched
 *       required: true
 *       schema:
 *         type: integer
 *         format: int64
 *    requestBody:
 *      description: Order object that will be Editd and added to the database
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Orders'
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
router.patch("/:id", auth.admin, updateOrder);

/**
 * @swagger
 * /v1/orders/{id}:
 *  delete:
 *    tags:
 *      - Orders
 *    summary: Orders list
 *    description: delete the full list of Orders
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
router.delete("/:id", auth.admin, deleteOrder);

module.exports = router;

/**
 * @swagger
 * components:
 *  schemas:
 *    Orders:
 *      type: object
 *      properties:
 *        user_id:
 *          type: integer
 *          example: 3
 *        order_status:
 *          type: string
 *          example: "Deliverd"
 *        order_date:
 *          type: String
 *          example: "2021-05-01"
 */
