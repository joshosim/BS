require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

const app = express();

app.use(express.json());

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(port, () => {
      console.log("Connected to DB and Listenting on PORT", process.env.PORT);
    });
  })
  .catch((err) => console.log(err));
