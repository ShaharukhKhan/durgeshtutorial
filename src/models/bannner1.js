const mongoose = require("mongoose");

const banner1 = mongoose.Schema({
  title: String,
  description: String,
});

module.exports = mongoose.model("banner1", banner1);
