const express = require("express");
const router = express.Router();
const { sendMessage } = require("../controllers/contactController");
const { validateContact, handleValidationErrors } = require("../utils/validators");

// POST /api/contact — envoyer un message (validé)
router.post("/contact", validateContact, handleValidationErrors, sendMessage);

module.exports = router;