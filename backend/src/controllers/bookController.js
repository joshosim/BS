const Book = require("../model/BookModel");
// const multer = require("multer");
const mongoose = require("mongoose");

//to get all the books
const getBooks = async (req, res) => {
  // const  = req.body;
  const book = await Book.find({}).sort({ createdAt: -1 });
  res.status(200).json(book);
};

//to create or post or add a new book
// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, "uploads/");
//   },
//   filename: function (req, file, cb) {
//     cd(null, Date.now() + "-" + file.originalname);
//   },
// });
// const upload = multer({ storage: storage });
// upload.single("file");
// const createBook = async (req, res) => {
//   const { title, description, author } = req.body;
//   const filePath = req.file.path;
//   try {
//     const book = await Book.create({ title, description, author, filePath });
//     res.status(200).json(book);
//   } catch (error) {
//     res.status(400).json({ error: error.message });
//   }
// };

module.exports = { getBooks };
