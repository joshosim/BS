const express = require("express");
const {
  loginTheUser,
  signupTheUser,
} = require("../controllers/userController");

const router = express.Router();

//to login in
router.post("/login", loginTheUser);

//to signup
router.post("/signup", signupTheUser);

module.exports = router;
