const router = require("express").Router();
const auth = require("../config/auth");

const {
	createOrder,
	getOrder,
	getOrders,
	updateOrder,
	deleteOrder,
} = require("../controllers/orders");

router.get("/", getOrders);
router.get("/:id", getOrder);
router.post("/", createOrder);
router.patch("/:id", auth.admin, updateOrder);
router.delete("/:id", auth.admin, deleteOrder);

module.exports = router;
