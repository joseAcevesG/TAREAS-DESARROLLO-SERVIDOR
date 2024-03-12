const router = require("express").Router();
const userController = require("../controllers/users.controllers");

router.post("/signUp", userController.signUp);
router.post("/login", userController.logIn);

module.exports = router;
