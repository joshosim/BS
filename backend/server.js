require("dotenv").config();
const express = require("express");
const cors = require("cors");
require("./src/db/mongoose");
const fileRouter = require("./src/router/file");

const app = express();
app.use(cors());

const port = process.env.PORT || 4000;

app.use(express.json());
app.use(fileRouter);

app.listen(port, () => {
  console.log(`Server is up on ${port}`);
});
