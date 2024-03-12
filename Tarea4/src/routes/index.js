const router = require("express").Router();
const authRoutes = require("./auth");
const newsRoutes = require("./news");

router.get("/", (req, res) => {
	res.render("home");
});
router.use("/auth", authRoutes);
router.use("/news", newsRoutes);

module.exports = router;
