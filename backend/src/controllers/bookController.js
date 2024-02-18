const Book = require("../model/BookModel");
//const multer = require("multer");
const mongoose = require("mongoose");

//to get all the books
const getBooks = async (req, res) => {
  // const  = req.body;
  const book = await Book.find({}).sort({ createdAt: -1 });
  res.status(200).json(book);
};

//get a single book
const getBook = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such book" });
  }

  const book = await Book.findById(id);

  if (!book) {
    return res.status(404).json({ error: "No such book" });
  }

  res.status(200).json(book);
};

const createBook = async (req, res) => {
  const { title, description, author } = req.body;
  //const filePath = req.file.path;
  try {
    const book = await Book.create({
      title,
      description,
      author,
      // filePath,
    });
    res.status(200).json(book);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { getBooks, getBook, createBook };
