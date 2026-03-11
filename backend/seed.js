// Script seed.js — à exécuter UNE SEULE FOIS pour peupler la base de données
// Commande : node seed.js

require("dotenv").config();
const mongoose = require("mongoose");

const Restaurant = require("./src/models/Restaurant");
const Category = require("./src/models/Category");
const Dish = require("./src/models/Dish");

const seed = async () => {
  try {
    await mongoose.connect(process.env.DATABASE_URL);
    console.log("✅ Connecté à MongoDB");

    // Nettoyage des collections existantes
    await Restaurant.deleteMany();
    await Category.deleteMany();
    await Dish.deleteMany();
    console.log("🗑️  Collections nettoyées");

    // --- 1. Créer le restaurant ---
    const restaurant = await Restaurant.create({
      name: "Monoresto",
      address: "Nouakchott, Mauritanie",
      phone: "222 00 00 00",
      logo: "",
    });
    console.log("🍽️  Restaurant créé :", restaurant.name);

    // --- 2. Créer les catégories ---
    const [pizza, burger, boissons] = await Category.insertMany([
      { name: "Pizza", restaurant_id: restaurant._id },
      { name: "Burger", restaurant_id: restaurant._id },
      { name: "Boissons", restaurant_id: restaurant._id },
    ]);
    console.log("📂 Catégories créées : Pizza, Burger, Boissons");

    // --- 3. Créer les plats ---
    await Dish.insertMany([
      // Pizzas
      {
        name: "Pizza Margherita",
        description: "Sauce tomate, mozzarella, basilic frais",
        price: 250,
        image: "",
        category_id: pizza._id,
        available: true,
      },
      {
        name: "Pizza Pepperoni",
        description: "Sauce tomate, mozzarella, pepperoni",
        price: 300,
        image: "",
        category_id: pizza._id,
        available: true,
      },
      {
        name: "Pizza 4 Fromages",
        description: "Mozzarella, cheddar, emmental, parmesan",
        price: 320,
        image: "",
        category_id: pizza._id,
        available: true,
      },

      // Burgers
      {
        name: "Cheese Burger",
        description: "Steak haché, cheddar, salade, tomate",
        price: 200,
        image: "",
        category_id: burger._id,
        available: true,
      },
      {
        name: "Double Burger",
        description: "Double steak haché, double cheddar, sauce spéciale",
        price: 280,
        image: "",
        category_id: burger._id,
        available: true,
      },

      // Boissons
      {
        name: "Coca-Cola",
        description: "33cl",
        price: 50,
        image: "",
        category_id: boissons._id,
        available: true,
      },
      {
        name: "Jus d'orange",
        description: "Jus frais pressé",
        price: 80,
        image: "",
        category_id: boissons._id,
        available: true,
      },
    ]);
    console.log("🍕 Plats créés : 3 pizzas, 2 burgers, 2 boissons");

    console.log("\n✅ Seed terminé avec succès !");
    console.log("👉 Tu peux maintenant tester : GET /api/menu");
    process.exit(0);
  } catch (error) {
    console.error("❌ Erreur seed :", error.message);
    process.exit(1);
  }
};

seed();