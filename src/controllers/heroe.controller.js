const Heroe = require("../models/heroe.model");

function getHeroes(req, res) {
  Heroe.find((error, heroeList) => {
    if (error) {
      res.status(500).send({
        message: error,
      });
    } else {
      if (heroeList) {
        res.status(200).json({
          heroe: heroeList,
        });
      } else {
        res.status(200).send({
          message: "No se pudo listar los héroes",
        });
      }
    }
  });
}

function getHeroesById(req, res) {
  const id = req.params.id;
  Heroe.findById(id).exec((error, heroeList) => {
    if (error) {
      res.status(500).send({
        message: error,
      });
    } else {
      if (heroeList) {
        res.status(200).json({
          heroe: heroeList,
        });
      } else {
        res.status(200).send({
          message: "No se pudo listar el héroe",
        });
      }
    }
  });
}

function createHeroes(req, res) {
  const { nombre, bio, img, aparicion, casa } = req.body;
  console.log(req.body);
  const heroe = new Heroe({
    nombre: nombre,
    bio: bio,
    img: img,
    aparicion: aparicion,
    casa: casa,
  });
  if (nombre && bio && img && aparicion && casa) {
    heroe.save((error, heroeCreate) => {
      if (error) {
        res.status(500).send({
          message: error.message,
        });
      } else {
        if (heroeCreate) {
          res.status(200).send({
            heroe: heroeCreate,
          });
        } else {
          res.status(200).send({
            message: "No se pudo guardar el héroe",
          });
        }
      }
    });
  } else {
    res.status(200).send({
      message: "Datos obligatorios",
    });
  }
}

function updateHeroes(req, res) {
  const id = req.params.id;
  const data = req.body;
  Heroe.findByIdAndUpdate(id, data, { new: true }, (error, heroesUpdate) => {
    if (error) {
      res.status(500).send({
        message: error,
      });
    } else {
      if (heroesUpdate) {
        res.status(200).json({
          heroe: heroesUpdate,
        });
      } else {
        res.status(200).send({
          message: "No se pudo actualizar el héroe",
        });
      }
    }
  });
}

function deleteHeroes(req, res) {
  const id = req.params.id;
  Heroe.findByIdAndRemove(id, (error, heroeDelete) => {
    if (error) {
      res.status(500).send({
        message: error,
      });
    } else {
      if (heroeDelete) {
        res.status(200).json({
          heroes: heroeDelete,
        });
      } else {
        res.status(200).send({
          message: "No se pudo eliminar el héroe",
        });
      }
    }
  });
}

const filterHeroes = async (req, res) => {
  const { search } = req.query;
  const heroeFilter = await Heroe.find({
    nombre: { $regex: search, $options: "i" },
  });
  if (heroeFilter) {
    res.status(200).json({
      heroes: heroeFilter,
    });
  } else {
    res.status(200).send({
      message: "No se pudo filtrar el héroe",
    });
  }
};

module.exports = {
  getHeroes,
  getHeroesById,
  createHeroes,
  updateHeroes,
  deleteHeroes,
  filterHeroes,
};
