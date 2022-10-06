const router = require("express").Router();
const auth = require("../config/auth");

const {
	createUserType,
	getUserType,
	getUserTypes,
	updateUserType,
	deleteUserType,
} = require("../controllers/userTypes");

router.get("/", auth.admin, getUserTypes);
router.get("/:id", auth.admin, getUserType);
router.post("/", auth.admin, createUserType);
router.patch("/:id", auth.admin, updateUserType);
router.delete("/:id", auth.admin, deleteUserType);

module.exports = router;
