const express = require("express");
const Book = require("../models/bookModel");

const {
  getBooks,
  createBook,
  deleteBook,
} = require("../controllers/bookController");

const router = express.Router();

//to get all books on the home page
router.get("/", getBooks);

//to add a new book to the book library
router.post("/book", createBook);
//deleting a book
router.delete("/:id", deleteBook);

module.exports = router;
