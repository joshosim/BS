const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const favouriteSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    bookUrl: {
      type: String,
      required: false,
    },
    favouriteId: {
      type: Boolean,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Favourite", favouriteSchema);
