const { Router } = require("express");
const router = Router();

const {
  getHeroes,
  getHeroesById,
  createHeroes,
  updateHeroes,
  deleteHeroes,
  filterHeroes,
} = require("../controllers/heroe.controller");

router.get("/heroes", getHeroes);
router.get("/heroes/:id", getHeroesById);
router.post("/heroes", createHeroes);
router.put("/heroes/:id", updateHeroes);
router.delete("/heroes/:id", deleteHeroes);
router.get("/filter", filterHeroes);

module.exports = router;
