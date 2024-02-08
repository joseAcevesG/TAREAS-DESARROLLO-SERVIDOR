const express = require("express");
const router = express.Router();
const authRoutes = require("./auth");
const usersRoutes = require("./users");

router.use("/users", usersRoutes);

// Define your endpoints here
router.get("/", (req, res) => {
	res.send("routes works");
});

module.exports = router;
