const rateLimit = require("express-rate-limit");

// Limite générale : 100 requêtes par minute (cahier des charges §10)
const generalLimiter = rateLimit({
  windowMs: 60 * 1000, // 1 minute
  max: 100,
  standardHeaders: true,
  legacyHeaders: false,
  message: {
    message: "Trop de requêtes, veuillez réessayer dans une minute.",
  },
});

// Limite stricte sur les commandes : 10 commandes par minute par IP
const orderLimiter = rateLimit({
  windowMs: 60 * 1000,
  max: 10,
  standardHeaders: true,
  legacyHeaders: false,
  message: {
    message: "Trop de commandes envoyées, veuillez patienter.",
  },
});

module.exports = { generalLimiter, orderLimiter };