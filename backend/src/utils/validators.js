const { body, validationResult } = require("express-validator");

// Règles de validation pour POST /api/orders
const validateOrder = [
  body("customer_name")
    .notEmpty().withMessage("Le nom du client est obligatoire")
    .isLength({ min: 2 }).withMessage("Le nom doit contenir au moins 2 caractères"),

  body("phone")
    .notEmpty().withMessage("Le téléphone est obligatoire")
    .isMobilePhone().withMessage("Le numéro de téléphone est invalide"),

  body("address")
    .notEmpty().withMessage("L'adresse est obligatoire"),

  body("items")
    .isArray({ min: 1 }).withMessage("La commande doit contenir au moins un plat"),

  body("items.*.dish_id")
    .notEmpty().withMessage("L'identifiant du plat est obligatoire"),

  body("items.*.quantity")
    .isInt({ min: 1 }).withMessage("La quantité doit être un entier supérieur à 0"),
];

// Règles de validation pour POST /api/contact
const validateContact = [
  body("name")
    .notEmpty().withMessage("Le nom est obligatoire"),

  body("phone")
    .notEmpty().withMessage("Le téléphone est obligatoire"),

  body("message")
    .notEmpty().withMessage("Le message est obligatoire")
    .isLength({ min: 10 }).withMessage("Le message doit contenir au moins 10 caractères"),
];

// Middleware qui vérifie les résultats et bloque si erreur
const handleValidationErrors = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      message: "Données invalides",
      errors: errors.array().map((e) => e.msg),
    });
  }
  next();
};

module.exports = { validateOrder, validateContact, handleValidationErrors };