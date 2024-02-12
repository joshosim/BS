const express = require("express");
const { getBooks } = require("../controllers/bookController");
const multer = require("multer");
const router = express.Router();

//get book
router.get("/", getBooks);
//get a single book
router.get("/:id", (req, res) => res.send("Getting a Single book"));
//post book
// router.post("/", createBook);
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cd(null, Date.now() + "-" + file.originalname);
  },
});
const upload = multer({ storage: storage });

router.post("/upload", upload.single("file"), async (req, res) => {
  const { title, description, author } = req.body;
  const filePath = req.file.path;
  try {
    const book = await Book.create({ title, description, author, filePath });
    res.status(200).json(book);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});
//delete book
router.delete("/:id", (req, res) => res.json("Deleting a Book"));
//update a book
router.patch("/:id", (req, res) => res.send("Updating a book"));

module.exports = router;
