const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const favouriteSchema = new Schema({
  favourite: {
    type: Boolean,
    required: true,
  },
});
