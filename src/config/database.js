const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const config = {
  url: "mongodb://localhost:27017/DataHeroes",
  options: {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  },
};

mongoose.connection.on("open", () => {
  console.log("Conectado con éxito a la base de datos!");
});

mongoose.connection.on("error", () => {
  throw new Error("No se pudo conectar a MongoDB!");
});

const connection = () => mongoose.connect(config.url, config.options);

module.exports = {
  connection,
};
