const express = require("express");
const UserController = require("../controllers/user");

const router = express.Router();

router.get("", UserController.getAllUsers);
router.post("", UserController.addUserDetails);
router.put("/:id", UserController.updateUserAllDetails);
router.patch("/:id", UserController.updateUserSpecificDetails);
router.delete("/:id", UserController.deleteUser);
router.get("/:id", UserController.getSingleUsers);

module.exports = router;
