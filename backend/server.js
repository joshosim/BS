require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bookRoutes = require("./src/routes/bookRoutes");
const userRoutes = require("./src/routes/userRoutes");

const app = express();
app.use(express.json());
//declaring routes
app.use("/api/book", bookRoutes);
app.use("/api/user", userRoutes);

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
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
