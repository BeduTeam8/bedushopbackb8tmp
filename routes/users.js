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

router.get("/", auth.admin, getUsers);
router.get("/:id", auth.admin, getUser);
// router.post("/", createUser);
router.patch("/:id", auth.Userid, updateUser);
router.delete("/:id", auth.admin, deleteUser);
router.post("/logIn", logIn);
router.post("/signUp", signUp);

module.exports = router;
