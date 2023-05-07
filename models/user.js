const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  name: { type: String, required: true},
  mobile: { type: String,  unique: true },
  email: { type: String,  unique: true },
  password: String
});

module.exports = mongoose.model("User", userSchema);
