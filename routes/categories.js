const router = require("express").Router();
const auth = require("../config/auth");

const {
	createCategory,
	getCategory,
	getCategories,
	updateCategory,
	deleteCategory,
} = require("../controllers/categories");

router.get("/", getCategories);
router.get("/:id", getCategory);
router.post("/", auth.seller, createCategory);
router.patch("/:id", auth.admin, updateCategory);
router.delete("/:id", auth.admin, deleteCategory);

module.exports = router;
