const router = require("express").Router();
const userController = require("../controllers/users.controllers");

router.post("/singUp", userController.singUp);
router.post("/logIn", userController.logIn);

module.exports = router;
