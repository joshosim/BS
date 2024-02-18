const mongoose = require("mongoose");
const bcyrptjs = require("bcryptjs");
const validator = require("validator");

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  age: { type: String, required: true },
  phone: { type: String, required: true },
  password: { type: String, required: true },
});

//static signup method
userSchema.statics.signup = async function (username, age, phone, password) {
  //validation
  if (!username || !age || !password || !phone) {
    throw Error("All fields must be filled");
  }

  if (!validator.isStrongPassword(password)) {
    throw Error("Password not strong enough");
  }

  const exists = await this.findOne({ username });

  if (exists) {
    throw Error("Username already in use");
  }

  const salt = await bcyrptjs.genSalt(10);
  const hash = await bcyrptjs.hash(password, salt);

  const user = await this.create({ username, age, phone, password: hash });

  return user;
};
//static login method
userSchema.statics.login = async function (username, password) {
  //validation
  if (!username || !password) {
    throw Error("All fields must be filled");
  }

  const user = await this.findOne({ username });

  if (!user) {
    throw Error("Incorrect Username");
  }

  const match = await bcyrptjs.compare(password, user.password);

  if (!match) {
    throw Error("Incorrect pasword");
  }

  return user;
};

module.exports = mongoose.model("User", userSchema);
