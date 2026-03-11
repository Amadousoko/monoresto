const Category = require("../models/Category");
const Dish = require("../models/Dish");

// GET /api/menu
// Retourne toutes les catégories avec leurs plats disponibles
const getMenu = async (req, res, next) => {
  try {
    const categories = await Category.find();

    // Pour chaque catégorie, on récupère ses plats disponibles
    const menuWithDishes = await Promise.all(
      categories.map(async (category) => {
        const dishes = await Dish.find({
          category_id: category._id,
          available: true,
        }).select("name description price image");

        return {
          id: category._id,
          name: category.name,
          dishes,
        };
      })
    );

    res.status(200).json({ categories: menuWithDishes });
  } catch (error) {
    next(error);
  }
};

// GET /api/dishes/:id
// Retourne les détails d'un plat
const getDishById = async (req, res, next) => {
  try {
    const dish = await Dish.findById(req.params.id).populate(
      "category_id",
      "name"
    );

    if (!dish) {
      return res.status(404).json({ message: "Plat introuvable" });
    }

    res.status(200).json({ dish });
  } catch (error) {
    next(error);
  }
};

module.exports = { getMenu, getDishById };