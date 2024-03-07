const router = require("express").Router();
const authRoutes = require("./auth");
const newsRoutes = require("./news");

router.use("/auth", authRoutes);
router.use("/news", newsRoutes);

module.exports = router;
