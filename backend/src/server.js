const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();

app.use(express.json());
app.use(cors());

mongoose.connect(
  "mongodb+srv://schoolmanagement:SchoolManagement@schoolmanagement.qasafmv.mongodb.net/schoolmanagement?retryWrites=true&w=majority"
);

app.listen(3001, () => console.log("SERVER STARTED!"));
//Password for DB connnection: SchoolManagement
