const Book = require("../model/BookModel");

const mongoose = require("mongoose");

//to get all the books
const getBooks = async (req, res) => {
  try {
    const book = await Book.find({});
    const sortedByCreatedDate = book.sort((a, b) => b.createdAt - a.createdAt);
    res.send(sortedByCreatedDate);
  } catch (error) {
    res.status(400).send("Error while getting list of files. Try again later.");
  }
  // const book = await Book.find({}).sort({ createdAt: -1 });
  // res.status(200).json(book);
};

//get a single book
const downloadBook = async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    res.set({
      "Content-Type": book.file_mimetype,
    });
    res.sendFile(path.join(__dirname, "..", file.file_path));
  } catch (error) {
    res.status(400).send("Error while downloading file. Try again later.");
  }
  // const { id } = req.params;
  // if (!mongoose.Types.ObjectId.isValid(id)) {
  //   return res.status(404).json({ error: "No such book" });
  // }

  // const book = await Book.findById(id);

  // if (!book) {
  //   return res.status(404).json({ error: "No such book" });
  // }

  // res.status(200).json(book);
};

const createBook = async (req, res) => {
  const { title, description, author } = req.body;
  const { file } = req.file;
  try {
    const book = await Book.create({
      title,
      description,
      author,
      file,
    });
    res.status(200).json(book);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { getBooks, downloadBook, createBook };
