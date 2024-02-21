const express = require("express");
const path = require("path");
const Book = require("../model/BookModel");
const {
  getBooks,
  createBook,
  downloadBook,
} = require("../controllers/bookController");
const multer = require("multer");
const router = express.Router();

//get book
router.get("/", getBooks);
//download a single book
router.get("/download/:id", downloadBook);
//post book
const storage = multer.diskStorage({
  destination(req, file, cb) {
    return cb(null, "../public/Images");
  },
  filename(req, file, cb) {
    return cb(null, `${new Date().getTime()}_${file.originalname}`);
  },
});
const upload = multer({
  storage,
  limits: {
    fileSize: 100000000, //max file size 100MB = 100000000bytes
  },
  fileFilter(req, file, cb) {
    if (!file.originalname.match(/\.(jpeg|jpg|png|pdf|doc|docx|xlsx|xls)$/)) {
      return cb(
        new Error(
          "only upload files with jpg, jpeg, png, pdf, doc, docx, xslx, xls format."
        )
      );
    }
    cb(undefined, true); //continue with upload
  },
});
router.post(
  "/upload",
  upload.single("file"),
  async (req, res) => {
    const { title, description, author } = req.body;
    const { path, mimetype } = req.file;
    try {
      const book = new Book({
        title,
        description,
        author,
        file_path: path,
        file_mimetype: mimetype,
      });
      await book.save();
      res.send("file uploaded successfully");
    } catch (error) {
      res.status(400).send("Error while uploading file. Try again later.");
    }
  },
  (error, req, res, next) => {
    if (error) {
      res.status(500).send(error.message);
    }
  }
);
//delete book
router.delete("/:id", (req, res) => res.json("Deleting a Book"));
//update a book
router.patch("/:id", (req, res) => res.send("Updating a book"));

module.exports = router;
