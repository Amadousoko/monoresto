const express = require("express");
const router = express.Router();
const { getMenu, getDishById } = require("../controllers/menuController");

// GET /api/menu — toutes les catégories avec leurs plats
router.get("/menu", getMenu);

// GET /api/dishes/:id — détails d'un plat
router.get("/dishes/:id", getDishById);

module.exports = router;