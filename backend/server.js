require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bookRoutes = require("./src/routes/bookRoutes");

const app = express();
app.use(express.json());
//declaring routes
app.use("/api/book", bookRoutes);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    //listening for requests
    app.listen(process.env.PORT, () => {
      console.log(
        "Connected to Database and Listening to PORT!",
        process.env.PORT
      );
    });
  })
  .catch((error) => console.log(error.message));
