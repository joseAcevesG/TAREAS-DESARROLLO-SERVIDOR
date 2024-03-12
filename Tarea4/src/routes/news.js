const router = require("express").Router();
const newsController = require("../controllers/news.controllers");
const auth = require("../middleware/auth");

router.use(auth);

router.get("", newsController.getNews);

module.exports = router;
