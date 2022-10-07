const router = require("express").Router();
const auth = require("../config/auth");

const {
	createCart,
	getCart,
	getCarts,
	updateCart,
	deleteCart,
} = require("../controllers/carts");

router.get("/", auth.admin, getCarts);
router.get("/:id", auth.Userid, getCart);
router.post("/", auth.Buyer, createCart);
router.patch("/:id", auth.Buyer, auth.Userid, updateCart);
router.delete("/:id", auth.Buyer, auth.Userid, deleteCart);

module.exports = router;
