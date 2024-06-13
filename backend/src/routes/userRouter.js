const express = require("express");
const {
  loginTheUser,
  signupTheUser,
  forgetPassword,
  resetPassword,
} = require("../controllers/userController");

const router = express.Router();

//to login in
router.post("/login", loginTheUser);

//to signup
router.post("/signup", signupTheUser);

//for forgetPassword
router.post("/forgetPassword", forgetPassword);

//for resetPassword
router.post("/reset-password/:token", resetPassword);

module.exports = router;
