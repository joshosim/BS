const express = require("express");
const { getBooks, createBook } = require("../controllers/bookController");
const multer = require("multer");
const router = express.Router();

//get book
router.get("/", getBooks);
//get a single book
router.get("/:id", (req, res) => res.send("Getting a Single book"));
//post book
router.post("/", createBook);
//delete book
router.delete("/:id", (req, res) => res.json("Deleting a Book"));
//update a book
router.patch("/:id", (req, res) => res.send("Updating a book"));

module.exports = router;
