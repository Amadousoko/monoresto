const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Le nom est obligatoire"],
      trim: true,
    },
    phone: {
      type: String,
      required: [true, "Le téléphone est obligatoire"],
      trim: true,
    },
    message: {
      type: String,
      required: [true, "Le message est obligatoire"],
      trim: true,
    },
  },
  {
    timestamps: { createdAt: "created_at", updatedAt: "updated_at" },
  }
);

module.exports = mongoose.model("Contact", contactSchema);