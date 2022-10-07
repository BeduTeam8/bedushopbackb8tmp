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
 *  get:
 *   tags:
 *    - Users
 *   summary: Get user by id
 *   description: get the user by id
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
router.get("/:id", auth.admin, getUser);
// router.post("/", createUser);

/**
 * @swagger
 * /v1/users/{id}:
 *  patch:
 *   tags:
 *    - Users
 *   summary: Update user by id
 *   description: update the user by id only if you are the admin or the user
 *   requestBody:
 *    required: true
 *    content:
 *     application/json:
 *	    schema:
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
router.patch("/:id", auth.Userid, updateUser);
/**
 * @swagger
 * /v1/users/{id}:
 *  delete:
 *   tags:
 *    - Users
 *   summary: Delete user by id
 *   description: delete the user by id only if you are the admin or the user
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
 * /v1/logIn:
 *  post:
 *   tags:
 *    - Users
 *   summary: Update user by id
 *   description: update the user by id only if you are the admin or the user
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
router.post("/logIn", logIn);

/**
 * @swagger
 * /v1/users/signUp:
 *   put:
 *     tags:
 *      - Users
 *     summary: sign up
 *     description: sign up a new user
 *     requestBody:
 *       description: user object that will be created and added to the database
 *       required: true
 *       content:
 *         application/json:
 *	         schema:
 *             $ref: '../models/users.js#/user'
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
router.post("/signUp", signUp);

module.exports = router;
