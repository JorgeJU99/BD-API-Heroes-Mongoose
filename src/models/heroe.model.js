const mongoose = require("mongoose");

const autorSchema = mongoose.Schema({
  nombre: String,
  bio: String,
  img: String,
  aparicion: String,
  casa: String,
});

const autores = mongoose.model("heroes", autorSchema);

module.exports = autores;
