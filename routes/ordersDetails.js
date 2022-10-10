const router = require("express").Router();
const auth = require("../config/auth");

const {
	createOrderDetails,
	getOrderDetails,
	getOrderDetailss,
	updateOrderDetails,
	deleteOrderDetails,
} = require("../controllers/ordersDetails");

// swagger documentation
/**
 * @swagger
 * /v1/ordersDetails:
 *  get:
 *    tags:
 *      - Order Details
 *    summary: all order details list
 *    description: get the full list of products
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
router.get("/", auth.logedIn, getOrderDetailss);

/**
 * @swagger
 * /v1/ordersDetails/{id}:
 *  get:
 *    tags:
 *      - Order Details
 *    summary: all order details list
 *    description: get the full list of products
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
router.get("/:id", auth.logedIn, getOrderDetails);

/**
 * @swagger
 * /v1/ordersDetails:
 *  post:
 *    tags:
 *      - Order Details
 *    summary: create order details
 *    description: create order details
 *    requestBody:
 *      description: user object that will be created and added to the database
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/OrderDetails'
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
router.post("/", auth.logedIn, createOrderDetails);

/**
 * @swagger
 * /v1/ordersDetails/{id}:
 *  patch:
 *    tags:
 *      - Order Details
 *    summary: patch order details
 *    description: patch order details
 *    parameters:
 *     - name: id
 *       in: path
 *       description: product id that needs to be fetched
 *       required: true
 *       schema:
 *         type: integer
 *         format: int64
 *    requestBody:
 *      description: user object that will be patched and added to the database
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/OrderDetails'
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
router.patch("/:id", auth.admin, updateOrderDetails);

/**
 * @swagger
 * /v1/ordersDetails/{id}:
 *  delete:
 *    tags:
 *      - Order Details
 *    summary: delete order detail
 *    description: Delete the selected product
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
router.delete("/:id", auth.admin, deleteOrderDetails);

module.exports = router;

/**
 * @swagger
 * components:
 *  schemas:
 *    OrderDetails:
 *      type: object
 *      properties:
 *        order_id:
 *          type: integer
 *          example: 1
 *        product_id:
 *          type: integer
 *          example: 2
 *        order_price:
 *          type: integer
 *          example: 3
 *        quantity:
 *          type: integer
 *          example: 4
 */
