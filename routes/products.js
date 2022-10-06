const router = require("express").Router();
const auth = require("../config/auth");

const {
	createProduct,
	getProduct,
	getProducts,
	updateProduct,
	deleteProduct,
} = require("../controllers/products");

router.get("/", getProducts);
router.get("/:id", getProduct);
router.post("/", auth.seller, createProduct);
router.patch("/:id", auth.seller, updateProduct);
router.delete("/:id", auth.seller, deleteProduct);

module.exports = router;
