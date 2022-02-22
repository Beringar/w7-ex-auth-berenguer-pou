const express = require("express");
const auth = require("../middlewares/auth");

const { getAllUserItems } = require("../controllers/itemsControllers");

const router = express.Router();

router.get("/list", auth, getAllUserItems);

module.exports = router;
