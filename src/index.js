const database = require("./config/database.js");
const express = require("express");
const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// rutas
app.use(require("./routes/heroe.route"));

// coneccion
database.connection().then(() => {
  app.listen(port, () => {
    console.log("Servidor corriendo en http://localhost:" + port);
  });
});
