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

exports.addUserDetails = (req, res, next) => {
  const user = new User({
    name: req.body.name,
    email: req.body.email,
    mobile: req.body.mobile,
    password: req.body.password
  });
  user.save().then(result => {
    res.status(201).json({
      message: "User Added!",
      result: result
    });
  })
  .catch(err => {
    res.status(500).json({
      message: "Error occuer at the time of User creation!"
    });
  });
}
