const express = require("express");
const UserController = require("../controllers/user");

const router = express.Router();

router.get("", UserController.getAllUsers);
router.post("", UserController.addUserDetails);
router.put("/:id", UserController.updateUserAllDetails);

module.exports = router;
