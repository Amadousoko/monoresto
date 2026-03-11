const Dish = require("../models/Dish");

// Vérifie que les plats existent et sont disponibles
// Calcule le prix total
// Retourne les items enrichis (avec name et price snapshot)
const prepareOrderItems = async (items) => {
  let total_price = 0;
  const preparedItems = [];

  for (const item of items) {
    const dish = await Dish.findById(item.dish_id);

    if (!dish) {
      throw { status: 404, message: `Plat introuvable : ${item.dish_id}` };
    }

    if (!dish.available) {
      throw {
        status: 400,
        message: `Le plat "${dish.name}" n'est plus disponible`,
      };
    }

    const itemTotal = dish.price * item.quantity;
    total_price += itemTotal;

    preparedItems.push({
      dish_id: dish._id,
      name: dish.name,       // snapshot du nom au moment de la commande
      price: dish.price,     // snapshot du prix au moment de la commande
      quantity: item.quantity,
    });
  }

  return { preparedItems, total_price };
};

module.exports = { prepareOrderItems };