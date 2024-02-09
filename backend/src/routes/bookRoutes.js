const express = require("express");

const router = express.Router();

//get book
router.get("/", () => console.log("Getting all the Books"));
//get a single book
router.get("/:id", () => console.log("Getting a Single book"));
//post book
router.post("/", () => console.log("Posting a new book"));
//delete book
router.delete("/:id", () => console.log("Deleting a Book"));
//update a book
router.patch("/:id", () => console.log("Updating a book"));

module.exports = router;
