const router = require("express").Router();
const auth = require("../config/auth");

const {
	createUserType,
	getUserType,
	getUserTypes,
	updateUserType,
	deleteUserType,
} = require("../controllers/userTypes");

// swagger documentation

/**
 * @swagger
 * /v1/userTypes:
 *  get:
 *    tags:
 *      - User Types
 *    summary: usertype list
 *    description: get the list of user type
 *    responses:
 *      200:
 *        description: a welcome message
 *      401:
 *        description: unauthorized you need to be an admin
 *      403:
 *        description: forbidden
 *    security:
 *      - bearerAuth: []
 */

router.get("/", auth.admin, getUserTypes);

/**
 * @swagger
 * /v1/userTypes/{id}:
 *   get:
 *     tags:
 *       - User Types
 *     summary: Get user type by id
 *     description: get the usertype by entering a value between 1 and 3
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
router.get("/:id", auth.admin, getUserType);

/**
 * @swagger
 * /v1/userTypes:
 *  post:
 *    tags:
 *      - User Types
 *    summary: usertype list
 *    description: get the list of user type
 *    requestBody:
 *      description: user object that will be created and added to the database
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Usertypes'
 *    responses:
 *      200:
 *        description: a welcome message
 *      401:
 *        description: unauthorized you need to be an admin
 *      403:
 *        description: forbidden
 *    security:
 *      - bearerAuth: []
 */
router.post("/", auth.admin, createUserType);

/**
 * @swagger
 * /v1/userTypes/{id}:
 *   patch:
 *     tags:
 *       - User Types
 *     summary: patch user type by id
 *     description: patch the usertype by entering a value between 1 and 3
 *     parameters:
 *       - name: id
 *         in: path
 *         description: user id that needs to be fetched
 *         required: true
 *         schema:
 *           type: integer
 *           format: int64
 *     requestBody:
 *       description: user object that will be created and added to the database
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Usertypes'
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
router.patch("/:id", auth.admin, updateUserType);

/**
 * @swagger
 * /v1/userTypes/{id}:
 *   delete:
 *     tags:
 *       - User Types
 *     summary: delete user type by id
 *     description: delete the usertype by entering a value between 1 and 3
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
router.delete("/:id", auth.admin, deleteUserType);

module.exports = router;

/**
 * @swagger
 * components:
 *  schemas:
 *     Usertypes:
 *      type: object
 *      properties:
 *        userType:
 *          type: string
 *          example: Buyer
 */
