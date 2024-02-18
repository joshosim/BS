const express = require("express");
const UserModel = require("../model/UserModel");
const router = express.Router();
const jwt = require("jsonwebtoken");
const bcyrptjs = require("bcryptjs");
const { signUser, loginUser } = require("../controllers/userController");

router.post("/signup", signUser);

router.post("/login", loginUser);

module.exports = router;
