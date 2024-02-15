const express = require("express");
const router = express.Router();
const Favourite = require("../model/FavouriteModel");

router.post("/favourite", async (req, res) => {
  const { cardId } = req.body;

  try {
    const newFavourite = await Favourite.create({ cardId });
    res.status(200).json(newFavourite);
  } catch (error) {
    console.error("Error adding book to favorites:", error);
    res.status(400).json({ error: "Server error" });
  }
});

module.exports = router;
