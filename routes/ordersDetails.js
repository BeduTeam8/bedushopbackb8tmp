const router = require("express").Router();
const auth = require("../config/auth");

const {
	createOrderDetails,
	getOrderDetails,
	getOrderDetailss,
	updateOrderDetails,
	deleteOrderDetails,
} = require("../controllers/ordersDetails");

router.get("/", getOrderDetailss);
router.get("/:id", getOrderDetails);
router.post("/", createOrderDetails);
router.patch("/:id", updateOrderDetails);
router.delete("/:id", deleteOrderDetails);

module.exports = router;
