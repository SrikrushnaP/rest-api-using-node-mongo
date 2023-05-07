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

exports.updateUserAllDetails = (req, res, next) => {
  const user = new User({
    _id: req.params.id,
    name: req.body.name,
    email: req.body.email,
    mobile: req.body.mobile,
    password: req.body.password
  });
  User.updateOne({ _id: req.params.id}, user)
    .then(result => {
      if(result.modifiedCount == 0 && result.matchedCount > 0){
        res.status(200).json({ message: "Oops! Nothing to update" });
      } else if (result.modifiedCount == 1) {
        res.status(200).json({ message: "Update successful!" });
      } else {
        res.status(401).json({ message: "Not authorized!" });
      }
    })
    .catch(error => {
      res.status(500).json({
        message: "Couldn't udpate user details!"
      });
    });
}

exports.updateUserSpecificDetails = (req, res, next) => {
  const user = new User({
    _id: req.params.id,
    password: req.body.password
  });
  User.updateOne({ _id: req.params.id}, user)
    .then(result => {
      if(result.modifiedCount == 0 && result.matchedCount > 0){
        res.status(200).json({ message: "Oops! Nothing to update" });
      } else if (result.modifiedCount == 1) {
        res.status(200).json({ message: "Update successful!" });
      } else {
        res.status(401).json({ message: "Not authorized!" });
      }
    })
    .catch(error => {
      res.status(500).json({
        message: "Couldn't udpate user details!"
      });
    });
}

exports.deleteUser = (req, res, next) => {
  User.deleteOne({ _id: req.params.id})
    .then(result => {
      if (result.deletedCount == 1) {
        res.status(200).json({ message: "User Deletion successful!" });
      } else {
        res.status(401).json({ message: "Not authorized!" });
      }
    })
    .catch(error => {
      res.status(500).json({
        message: "Deleting user failed!"
      });
    });
}
