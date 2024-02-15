const express = require("express");
const UserModel = require("../model/UserModel");
const router = express.Router();
const jwt = require("jsonwebtoken");
const bcyrptjs = require("bcryptjs");

router.post("/signup", async (req, res) => {
  const { username, age, phone, password } = req.body;

  const user = await UserModel.findOne({ username });

  if (user) {
    return res.json({ message: "User already exists!" });
  }

  const hashedPassword = await bcyrptjs.hash(password, 10);

  const newUser = new UserModel({
    username,
    password: hashedPassword,
    age,
    phone,
  });
  await newUser.save();

  res.json({ message: "New User Registered Succesfully" });
});

router.post("/login", async (req, res) => {
  const { username, password } = req.body;
  const user = await UserModel.findOne({ username });

  if (!user) {
    return res.json({ message: "Incorrect Username or Password!" });
  }
  const isPasswordValid = await bcyrptjs.compare(password, user.password);
  if (!isPasswordValid) {
    return res.json({ message: "Incorrect Username or Password!" });
  }
  const token = jwt.sign({ id: user._id }, "secretkey");
  res.json({ token, userID: user._id });
});

module.exports = router;
