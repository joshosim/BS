require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bookRoutes = require("./src/routes/bookRouter");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());
app.use("/api/books", bookRoutes);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log("Connected to DB and Listenting on PORT", process.env.PORT);
    });
  })
  .catch((err) => console.log(err));
