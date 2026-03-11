const express = require("express");
const cors = require("cors");
const menuRoutes = require("./routes/menuRoutes");
const orderRoutes = require("./routes/orderRoutes");
const contactRoutes = require("./routes/contactRoutes");
const errorHandler = require("./middleware/errorHandler");
const { generalLimiter } = require("./middleware/rateLimiter");

const app = express();

// Middlewares globaux
app.use(cors());
app.use(express.json());
app.use(generalLimiter); // 100 requêtes / minute sur toutes les routes

// Routes API
app.use("/api", menuRoutes);
app.use("/api", orderRoutes);
app.use("/api", contactRoutes);

// Middleware de gestion des erreurs (toujours en dernier)
app.use(errorHandler);

module.exports = app;