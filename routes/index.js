const router = require("express").Router();

const carts = require("./carts");
const categories = require("./categories");
const orders = require("./orders");
const ordersDetails = require("./ordersDetails");
const products = require("./products");
const reviews = require("./reviews");
const users = require("./users");
const userTypes = require("./userTypes");

// swagger documentation
/**
 * @swagger
 * /v1/:
 *  get:
 *   tags:
 *    - Home
 *   summary: home page for bedushop
 *   description: home page for bedushop that shows created by and team name
 *   responses:
 *    200:
 *     description: a welcome message
 */
router.get("/", (req, res) => {
	res.json({
		info: "Welcome to BEDU Shop Back Team B8 API!",
		Jesús: "https://github.com/jesuszdp",
		Francisco: "https://github.com/FrankTII",
		Miguel: "https://github.com/toonchavez8",
	});
});

router.use("/carts", carts);
router.use("/categories", categories);
router.use("/orders", orders);
router.use("/ordersDetails", ordersDetails);
router.use("/products", products);
router.use("/reviews", reviews);
router.use("/users", users);
router.use("/userTypes", userTypes);

module.exports = router;
