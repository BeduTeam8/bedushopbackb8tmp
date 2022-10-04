const router = require("express").Router();
const auth = require("../config/auth");

const {
	createCart,
	getCart,
	getCarts,
	updateCart,
	deleteCart,
} = require("../controllers/carts");

router.get("/", getCarts);
router.get("/:id", getCart);
router.post("/", createCart);
router.patch("/:id", updateCart);
router.delete("/:id", deleteCart);

module.exports = router;
