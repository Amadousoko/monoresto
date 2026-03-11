const mongoose = require("mongoose");

// Sous-schéma pour chaque plat dans la commande
const orderItemSchema = new mongoose.Schema(
  {
    dish_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Dish",
      required: [true, "L'identifiant du plat est obligatoire"],
    },
    name: {
      type: String,
      required: true, // Sauvegardé au moment de la commande (snapshot)
    },
    price: {
      type: Number,
      required: true, // Sauvegardé au moment de la commande (snapshot)
    },
    quantity: {
      type: Number,
      required: [true, "La quantité est obligatoire"],
      min: [1, "La quantité minimum est 1"],
    },
  },
  { _id: false }
);

const orderSchema = new mongoose.Schema(
  {
    customer_name: {
      type: String,
      required: [true, "Le nom du client est obligatoire"],
      trim: true,
    },
    phone: {
      type: String,
      required: [true, "Le téléphone est obligatoire"],
      trim: true,
    },
    address: {
      type: String,
      required: [true, "L'adresse est obligatoire"],
      trim: true,
    },
    items: {
      type: [orderItemSchema],
      validate: {
        validator: (items) => items.length > 0,
        message: "La commande doit contenir au moins un plat",
      },
    },
    total_price: {
      type: Number,
      required: true,
      min: [0, "Le prix total ne peut pas être négatif"],
    },
    status: {
      type: String,
      enum: {
        values: ["pending", "confirmed", "delivered"],
        message: "Statut invalide : {VALUE}",
      },
      default: "pending",
    },
  },
  {
    timestamps: { createdAt: "created_at", updatedAt: "updated_at" },
  }
);

module.exports = mongoose.model("Order", orderSchema);