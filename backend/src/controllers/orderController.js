const Order = require("../models/Order");
const { prepareOrderItems } = require("../services/orderService");

// POST /api/orders
// Crée une nouvelle commande
const createOrder = async (req, res, next) => {
  try {
    const { customer_name, phone, address, items } = req.body;

    // Prépare les items et calcule le total via le service
    const { preparedItems, total_price } = await prepareOrderItems(items);

    const newOrder = await Order.create({
      customer_name,
      phone,
      address,
      items: preparedItems,
      total_price,
      status: "pending",
    });

    res.status(201).json({
      message: "Commande enregistrée avec succès",
      order: {
        id: newOrder._id,
        customer_name: newOrder.customer_name,
        total_price: newOrder.total_price,
        status: newOrder.status,
        created_at: newOrder.created_at,
      },
    });
  } catch (error) {
    // Erreurs métier remontées depuis orderService
    if (error.status) {
      return res.status(error.status).json({ message: error.message });
    }
    next(error);
  }
};

// GET /api/orders
// Retourne toutes les commandes (usage interne / admin)
const getOrders = async (req, res, next) => {
  try {
    const orders = await Order.find().sort({ created_at: -1 });
    res.status(200).json({ orders });
  } catch (error) {
    next(error);
  }
};

module.exports = { createOrder, getOrders };