const express = require("express");
const router = express.Router();
const userController = require("../controllers/user.controllers");
const authMiddleware = require("../middleware/auth");
const rolesMiddleware = require("../middleware/roles");

router.use(authMiddleware);

router.get("", rolesMiddleware("admin"), userController.getUsers);
router.get("/:id", rolesMiddleware("admin"), userController.getUserById);
router.post("", userController.createUser);
router.put("/:id", rolesMiddleware("admin"), userController.updateUser);
router.delete("/:id", rolesMiddleware("admin"), userController.deleteUser);

module.exports = router;
