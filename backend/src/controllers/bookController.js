const Book = require("../models/bookModel");

const mongoose = require("mongoose");

//to get all books on the home page
const getAllBooks = async (req, res) => {
  try {
    const books = await Book.find({}).sort({ createdAt: -1 });
    res.status(200).json(books);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error fetching books" });
  }
};
//to get a book
const getABook = async (req, res) => {
  const { id } = req.params;

  //to confirm if the database has the actual id
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such Book found" });
  }

  const book = await Book.findById(id);

  if (!book) {
    return res.status(404).json({ error: "No such Book found" });
  }

  res.status(404).json(book);
};
//to get add a books
const addNewBook = async (req, res) => {
  const { title, description } = req.body;

  let emptyFields = [];

  if (!title) {
    emptyFields.push("title");
  }
  if (!description) {
    emptyFields.push("description");
  }
  if (emptyFields.length > 0) {
    return res
      .status(400)
      .json({ error: "Please fill in all the fields", emptyFields });
  }

  try {
    const book = await Book.create({
      title,
      description,
    });
    res.status(200).json(book);
  } catch (err) {
    res.status(400).json({ err: err.mesasge });
  }
};

module.exports = {
  getABook,
  getAllBooks,
  addNewBook,
};
