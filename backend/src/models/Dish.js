const mongoose = require("mongoose");

const dishSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Le nom du plat est obligatoire"],
      trim: true,
    },
    description: {
      type: String,
      default: "",
      trim: true,
    },
    price: {
      type: Number,
      required: [true, "Le prix est obligatoire"],
      min: [0, "Le prix ne peut pas être négatif"],
      // Exemple : 250 MRU
    },
    image: {
      type: String,
      default: "",
    },
    category_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
      required: [true, "La catégorie est obligatoire"],
    },
    available: {
      type: Boolean,
      default: true, // true = plat disponible à la commande
    },
  },
  {
    timestamps: { createdAt: "created_at", updatedAt: "updated_at" },
  }
);

// Index pour accélérer les requêtes sur category_id et available (voir cahier des charges §14)
dishSchema.index({ category_id: 1 });
dishSchema.index({ available: 1 });

module.exports = mongoose.model("Dish", dishSchema);