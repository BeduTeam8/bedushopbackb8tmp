const router = require("express").Router();
const auth = require("../config/auth");

const {
	createProduct,
	getProduct,
	getProducts,
	updateProduct,
	deleteProduct,
} = require("../controllers/products");

// swagger documentation
/**
 * @swagger
 * /v1/products:
 *  get:
 *    tags:
 *      - Products
 *    summary: Product list
 *    description: get the full list of products
 *    responses:
 *      200:
 *        description: a welcome message
 *      401:
 *        description: unauthorized you need to be an admin
 *      403:
 *        description: forbidden
 */
router.get("/", getProducts);

/**
 * @swagger
 * /v1/products/{id}:
 *  get:
 *    tags:
 *      - Products
 *    summary: specific product
 *    description: search by product id
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
 */
router.get("/:id", getProduct);

/**
 * @swagger
 * /v1/products/:
 *  post:
 *    tags:
 *      - Products
 *    summary: create product
 *    description: post the full list of products
 *    requestBody:
 *      description: user object that will be created and added to the database
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Product'
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
router.post("/", auth.seller, createProduct);

/**
 * @swagger
 * /v1/products/{id}:
 *  patch:
 *    tags:
 *      - Products
 *    summary: edit product
 *    description: patch the specific product
 *    parameters:
 *     - name: id
 *       in: path
 *       description: product id that needs to be fetched
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
 *            $ref: '#/components/schemas/Product'
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
router.patch("/:id", auth.seller, updateProduct);

/**
 * @swagger
 * /v1/products/{id}:
 *  delete:
 *    tags:
 *      - Products
 *    summary: delete specific product
 *    description: search by product id and delete
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
router.delete("/:id", auth.seller, deleteProduct);

module.exports = router;

/**
 * @swagger
 * components:
 *  schemas:
 *    Product:
 *      type: object
 *      properties:
 *        title:
 *          type: string
 *          example: orange doorhinge
 *        price:
 *          type: integer
 *          example: 420.69
 *        description:
 *          type: string
 *          example: lorem epsim my guy
 *        category_id:
 *          type: integer
 *          example: 1
 *        image_url0:
 *          type: string
 *          example: https://api.lorem.space/image/fashion?w=640&h=480&r=9574
 *        image_url1:
 *          type: string
 *          example: https://api.lorem.space/image/fashion?w=640&h=480&r=9574
 *        image_url2:
 *          type: string
 *          example: https://api.lorem.space/image/fashion?w=640&h=480&r=9574
 */
