// POST /api/contact
// Enregistre un message de contact
// (un modèle Contact.js peut être ajouté si besoin de persistance)

const sendMessage = async (req, res, next) => {
  try {
    const { name, phone, message } = req.body;

    // Pour l'instant on log le message — tu peux y brancher un modèle MongoDB
    // ou un service email (nodemailer) plus tard
    console.log("Nouveau message de contact :", { name, phone, message });

    res.status(200).json({
      message: "Message reçu, nous vous contacterons bientôt.",
    });
  } catch (error) {
    next(error);
  }
};

module.exports = { sendMessage };