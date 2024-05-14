const Favourite = require("../models/favourite");

const mongoose = require("mongoose");

//to get all books on the home page
const getFavourite = async (req, res) => {
  try {
    const books = await Favourite.find({ favouriteId: true }).sort({
      createdAt: -1,
    });
    res.status(200).json(books);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error fetching books" });
  }
};

module.exports = {
  getFavourite,
};
