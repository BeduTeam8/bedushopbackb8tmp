const router = require("express").Router();
const auth = require("../config/auth");

const {
	createReview,
	getReview,
	getReviews,
	updateReview,
	deleteReview,
} = require("../controllers/reviews");

// swagger documentation
/**
 * @swagger
 * /v1/reviews:
 *  get:
 *    tags:
 *      - Reviews
 *    summary: Reviews list
 *    description: get the full list of reviews
 *    responses:
 *      200:
 *        description: a welcome message
 *      401:
 *        description: unauthorized you need to be an admin
 *      403:
 *        description: forbidden
 */

router.get("/", getReviews);

/**
 * @swagger
 * /v1/reviews/{id}:
 *  get:
 *    tags:
 *      - Reviews
 *    summary: Reviews list
 *    description: get the full list of reviews
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
router.get("/:id", getReview);

/**
 * @swagger
 * /v1/reviews:
 *  post:
 *    tags:
 *      - Reviews
 *    summary: post a review
 *    description: create a review
 *    requestBody:
 *      description: review object that will be created and added to the database
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Reviews'
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
router.post("/", auth.logedIn, createReview);

/**
 * @swagger
 * /v1/reviews/{id}:
 *  patch:
 *    tags:
 *      - Reviews
 *    summary: patch a review
 *    description: edit a review
 *    parameters:
 *     - name: id
 *       in: path
 *       description: product id that needs to be fetched
 *       required: true
 *       schema:
 *         type: integer
 *         format: int64
 *    requestBody:
 *      description: review object that will be created and added to the database
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Reviews'
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
router.patch("/:id", auth.Userid, updateReview);

/**
 * @swagger
 * /v1/reviews/{id}:
 *  delete:
 *    tags:
 *      - Reviews
 *    summary: delete a review
 *    description: delete a review
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
router.delete("/:id", auth.Userid, deleteReview);

module.exports = router;

/**
 * @swagger
 * components:
 *  schemas:
 *    Reviews:
 *      type: object
 *      properties:
 *        review:
 *          type: string
 *          example: "this is a review"
 *        rating:
 *          type: integer
 *          example: 5
 *        user_id:
 *          type: integer
 *          example: 1
 *        product_id:
 *          type: integer
 *          example: 1
 */
