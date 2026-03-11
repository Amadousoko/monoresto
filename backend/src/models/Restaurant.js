const mongoose = require("mongoose");

const restaurantSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Le nom du restaurant est obligatoire"],
      trim: true,
    },
    address: {
      type: String,
      required: [true, "L'adresse est obligatoire"],
      trim: true,
    },
    phone: {
      type: String,
      required: [true, "Le téléphone est obligatoire"],
      trim: true,
    },
    logo: {
      type: String,
      default: "",
    },
  },
  {
    timestamps: { createdAt: "created_at", updatedAt: "updated_at" },
  }
);

module.exports = mongoose.model("Restaurant", restaurantSchema);