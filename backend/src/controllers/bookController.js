const Book = require("../models/bookModel");

const mongoose = require("mongoose");

// //to get a book
// const getABook = async (req, res) => {
//   const { id } = req.params;

//   //to confirm if the database has the actual id
//   if (!mongoose.Types.ObjectId.isValid(id)) {
//     return res.status(404).json({ error: "No such Book found" });
//   }

//   const book = await Book.findById(id);

//   if (!book) {
//     return res.status(404).json({ error: "No such Book found" });
//   }

//   res.status(404).json(book);
// };
//to get add a books
const createBook = async (req, res, next) => {
  const { bookUrl, title, description } = req.body;

  if (!bookUrl || !title || !description) {
    res.status(400);
    return next(new Error("BookUrl field is required"));
  }

  try {
    //uploading to the database
    const book = await Book.create({
      bookUrl,
      title,
      description,
    });
    res.status(200).json(book);
  } catch (err) {
    res.status(400).json({ err: err.mesasge });
    next(error.message);
  }
};

//to get all books on the home page
const getBooks = async (req, res) => {
  try {
    const books = await Book.find({}).sort({ createdAt: -1 });
    res.status(200).json(books);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error fetching books" });
  }
};

module.exports = {
  // deleteBook,
  // getABook,
  getBooks,
  createBook,
};
