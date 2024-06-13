const User = require("../models/userModel");
const nodemailer = require("nodemailer");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const createToken = (_id) => {
  return jwt.sign({ _id: _id }, process.env.SECRET, { expiresIn: "3d" });
};

const signupTheUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.signup(email, password);

    //create the token that will last for 3days upon signup
    const token = createToken(user._id);

    //token is the header encoded, the payload encoded and the signature encoded together
    res.status(200).json({ email, token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const loginTheUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.login(email, password);

    //create the token that will last for 3days upon signup
    const token = createToken(user._id);

    res.status(200).json({ email, token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
const forgetPassword = async (req, res) => {
  try {
    //Finding the user by email
    const user = await User.findOne({ mail: req.body.email });

    // checking if user exists
    if (!user) {
      return res.status(404).send({ message: "User not found" });
    }

    //generating a usique JWT token for the user that contains the user's id
    const token = createToken(user._id);

    //send the token to the user's email
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD_APP_EMAIL,
      },
    });

    //email configuration
    const mailOptions = {
      from: process.env.EMAIL,
      to: req.body.email,
      subject: "Reset Password",
      html: `<h1>Reset Your Password</h1>
    <p>Click on the following link to reset your password:</p>
    <a href="http://localhost:5173/reset-password/${token}">http://localhost:5173/reset-password/${token}</a>
    <p>The link will expire in 10 minutes.</p>
    <p>If you didn't request a password reset, please ignore this email.</p>`,
    };

    //send the email
    transporter.sendMail(mailOptions, (err, info) => {
      if (err) {
        return res.status(500).send({ message: err.message });
      }
      res.status(200).send({ message: "Email sent" });
    });
  } catch (error) {
    res.status(500).send({ message: err.message });
  }
};
const resetPassword = async (req, res) => {};

module.exports = {
  signupTheUser,
  loginTheUser,
  forgetPassword,
  resetPassword,
};
