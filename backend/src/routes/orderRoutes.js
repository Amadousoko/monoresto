const express = require("express");
const router = express.Router();
const { createOrder, getOrders } = require("../controllers/orderController");
const { orderLimiter } = require("../middleware/rateLimiter");
const { validateOrder, handleValidationErrors } = require("../utils/validators");

// POST /api/orders — créer une commande (limité + validé)
router.post("/orders", orderLimiter, validateOrder, handleValidationErrors, createOrder);

// GET /api/orders — lister les commandes (admin)
router.get("/orders", getOrders);

module.exports = router;