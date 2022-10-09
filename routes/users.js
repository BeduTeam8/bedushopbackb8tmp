const router = require("express").Router();
const auth = require("../config/auth");

const {
	// createUser,
	getUser,
	getUsers,
	updateUser,
	deleteUser,
	logIn,
	signUp,
} = require("../controllers/users");

// swagger documentation
/**
 * @swagger
 * /v1/users:
 *  get:
 *   tags:
 *    - Users
 *   summary: Users list
 *   description: get the list of users
 *   responses:
 *    200:
 *     description: a welcome message
 *    401:
 *     description: unauthorized you need to be an admin
 *    403:
 *     description: forbidden
 *   security:
 *    - bearerAuth: []
 */
router.get("/", auth.admin, getUsers);

/**
 * @swagger
 * /v1/users/{id}:
 *   get:
 *     tags:
 *       - Users
 *     summary: Get user by id
 *     description: get the user by id
 *     parameters:
 *       - name: id
 *         in: path
 *         description: user id that needs to be fetched
 *         required: true
 *         schema:
 *           type: integer
 *           format: int64
 *     responses:
 *       200:
 *         description: ok
 *       401:
 *         description: unauthorized you need to be an admin
 *       403:
 *         description: forbidden
 *     security:
 *       - bearerAuth: []
 */
router.get("/:id", auth.admin, getUser);
// router.post("/", createUser);

/**
 * @swagger
 * /v1/users/{id}:
 *  patch:
 *    tags:
 *      - Users
 *    summary: Update user by id
 *    description: update the user by id only if you are the admin or the user
 *    parameters:
 *      - name: id
 *        in: path
 *        description: user id that needs to be fetched
 *        required: true
 *        schema:
 *          type: integer
 *          format: int64
 *    requestBody:
 *      description: user object that will be created and added to the database
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/User'
 *    responses:
 *      200:
 *        description: ok
 *      401:
 *        description: unauthorized you need to be an admin
 *      403:
 *        description: forbidden
 *    security:
 *      - bearerAuth: []
 */
router.patch("/:id", auth.Userid, updateUser);

/**
 * @swagger
 * /v1/users/{id}:
 *  delete:
 *   tags:
 *    - Users
 *   summary: Delete user by id
 *   description: delete the user by id only if you are the admin or the user
 *   parameters:
 *     - name: id
 *       in: path
 *       description: user id that needs to be fetched
 *       required: true
 *       schema:
 *         type: integer
 *         format: int64
 *   responses:
 *    200:
 *     description: ok
 *    401:
 *     description: unauthorized you need to be an admin
 *    403:
 *     description: forbidden
 *   security:
 *    - bearerAuth: []
 */
router.delete("/:id", auth.admin, deleteUser);

/**
 * @swagger
 * /v1/users/logIn:
 *   post:
 *     tags:
 *       - Users
 *     summary: user login
 *     description: login with username and password
 *     requestBody:
 *       description: user object that will be created and added to the database
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/logIn'
 *     responses:
 *       200:
 *         description: ok
 *       4001:
 *         description: unauthorized you need to be an admin
 *       403:
 *         description: forbidden
 */
router.post("/logIn", logIn);

/**
 * @swagger
 * /v1/users/signUp:
 *   post:
 *     tags:
 *       - Users
 *     summary: sign up
 *     description: sign up a new user
 *     requestBody:
 *       description: user object that will be created and added to the database
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User'
 *     responses:
 *       200:
 *         description: ok
 *       401:
 *         description: unauthorized you need to be an admin
 *       403:
 *         description: forbidden
 */

//   schema : users

router.post("/signUp", signUp);

module.exports = router;

// schema : users
/**
 *@swagger
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       properties:
 *         first_name:
 *           type: string
 *           example: jon
 *         last_name:
 *           type: string
 *           example: snow
 *         username:
 *           type: string
 *           example: kingofthenorth
 *         email:
 *           type: string
 *           example: jon@thewall.com
 *         gender:
 *           type: string
 *           example: male
 *         street:
 *           type: string
 *           example: 123 IN THE NORTH AVE
 *         city:
 *           type: string
 *           example: the wall
 *         zip_code:
 *           type: string
 *           example: 12345
 *         state:
 *           type: string
 *           example: winterfell
 *         country:
 *           type: string
 *           example: westeros
 *         password:
 *           type: string
 *           example: 12345
 *         user_type:
 *           type: integer
 *           example: 3
 *         credit_card_type:
 *           type: string
 *           example: mastercard
 *         credit_card:
 *           type: string
 *           example: 4242424242424242
 *         phone:
 *           type: string
 *           example: 3333333333
 *     logIn:
 *      type: object
 *      properties:
 *        username:
 *          type: string
 *          example: kingofthenorth
 *        password:
 *          type: string
 *          example: 12345
 */
