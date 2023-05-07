const express = require("express");
const UserController = require("../controllers/user");

const router = express.Router();

router.get("", UserController.getAllUsers);

module.exports = router;
