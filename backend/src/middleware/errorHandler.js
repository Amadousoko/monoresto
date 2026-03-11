// Middleware de gestion centralisée des erreurs
// Doit toujours être enregistré EN DERNIER dans app.js

const errorHandler = (err, req, res, next) => {
  console.error(`[ERREUR] ${err.message}`);

  // Erreur de validation Mongoose (champ obligatoire manquant, etc.)
  if (err.name === "ValidationError") {
    const messages = Object.values(err.errors).map((e) => e.message);
    return res.status(400).json({ message: "Données invalides", errors: messages });
  }

  // ID MongoDB mal formaté
  if (err.name === "CastError") {
    return res.status(400).json({ message: "Identifiant invalide" });
  }

  // Doublon sur un champ unique
  if (err.code === 11000) {
    const field = Object.keys(err.keyValue)[0];
    return res.status(409).json({ message: `La valeur du champ "${field}" existe déjà` });
  }

  // Erreur serveur générique
  res.status(err.status || 500).json({
    message: err.message || "Erreur interne du serveur",
  });
};

module.exports = errorHandler;