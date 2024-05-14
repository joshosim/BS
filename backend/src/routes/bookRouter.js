const express = require("express");
const Book = require("../models/bookModel");

const {
  // getABook,
  // getAllBooks,
  createBook,
  // deleteBook,
} = require("../controllers/bookController");

const router = express.Router();

//to get all books on the home page
// router.get("/", getAllBooks);

// //to get a particular book
// router.get("/:id", getABook);

//to add a new book to the book library
router.post("/book", createBook);
//deleting a book

module.exports = router;
