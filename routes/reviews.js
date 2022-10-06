const router = require("express").Router();
const auth = require("../config/auth");

const {
	createReview,
	getReview,
	getReviews,
	updateReview,
	deleteReview,
} = require("../controllers/reviews");

router.get("/", getReviews);
router.get("/:id", getReview);
router.post("/", createReview);
router.patch("/:id", updateReview);
router.delete("/:id", auth.admin, deleteReview);

module.exports = router;
