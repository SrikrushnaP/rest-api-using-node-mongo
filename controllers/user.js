const User = require("../models/user");

exports.getAllUsers = (req, res, next) => {
  User.find().then(user => {
    if (user) {
      res.status(200).json(user);
    } else {
      res.status(404).json({ message: "No user found!" });
    }
  })
  .catch(error => {
    res.status(500).json({
      message: "Fetching user failed!",
      error: error
    });
  });
}
