const Book = require("../model/BookModel");

const mongoose = require("mongoose");

//to get all the books
const getBooks = async (req, res) => {
  // const  = req.body;
  const book = await Book.find({}).sort({ createdAt: -1 });
  res.status(200).json(book);
};

//to create or post or add a new book
const createBook = async (req, res) => {
  const { title, description, image, author } = req.body;
  try {
    const book = await Book.create({ title, description, image, author });
    res.status(200).json(book);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { getBooks, createBook };
