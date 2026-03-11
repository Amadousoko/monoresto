const Contact = require("../models/Contact");

// POST /api/contact
// Enregistre un message de contact en base de données
const sendMessage = async (req, res, next) => {
  try {
    const { name, phone, message } = req.body;

    const newContact = await Contact.create({ name, phone, message });

    res.status(201).json({
      message: "Message reçu, nous vous contacterons bientôt.",
      contact: {
        id: newContact._id,
        name: newContact.name,
        created_at: newContact.created_at,
      },
    });
  } catch (error) {
    next(error);
  }
};

module.exports = { sendMessage };