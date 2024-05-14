const express = require("express");
const Favourite = require("../models/favourite");

const { getFavourite } = require("../controllers/favourite");

const router = express.Router();

//to get all books on the home page
router.get("/favourite", getFavourite);

module.exports = router;
