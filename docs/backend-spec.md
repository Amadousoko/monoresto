# CAHIER DES CHARGES – BACKEND

## Projet : Monoresto (Prototype SaaS Restaurant)

Equipe : Team Soko
Frontend : Adama (React)
Backend : Soko (Node.js)

Objectif : créer une API backend permettant au frontend de récupérer le menu et d’enregistrer les commandes des clients.

---

# 1. OBJECTIF DU BACKEND

Le backend est responsable de :

• gérer la base de données
• fournir les données au frontend
• enregistrer les commandes
• valider les données envoyées par le client

Le backend fonctionne comme une API REST.

Flux :

Client
→ Frontend React
→ API Backend
→ Base de données

---

# 2. TECHNOLOGIES UTILISÉES

Stack backend :

Node.js
Express.js
MongoDB (via Mongoose)

Outils supplémentaires :

dotenv
cors
express-validator
express-rate-limit

---

# 3. STRUCTURE DU PROJET BACKEND

Architecture MVC.

backend/

src/

├── config/
│     db.js
│     server.js
│
├── controllers/
│     menuController.js
│     orderController.js
│     contactController.js
│
├── models/
│     Dish.js
│     Category.js
│     Order.js
│
├── routes/
│     menuRoutes.js
│     orderRoutes.js
│     contactRoutes.js
│
├── services/
│     orderService.js
│
├── middleware/
│     errorHandler.js
│
├── utils/
│     validators.js
│
└── app.js
---

# 4. CONFIGURATION DU SERVEUR

Fichier :

config/server.js

Responsabilités :

• lancer le serveur
• connecter la base de données
• charger les variables d’environnement

Variables dans le fichier `.env` :

PORT=5000
DATABASE_URL=xxxxx
NODE_ENV=development

---

# 5. CONNEXION BASE DE DONNÉES

Fichier :

config/db.js

Responsabilités :

• connecter MongoDB
• gérer les erreurs de connexion

Utiliser Mongoose.

---

# 6. MODELES DE BASE DE DONNÉES

## 6.1 Restaurant

Restaurant.js

Champs :

id
name
address
phone
logo
created_at

---

## 6.2 Category

Category.js

Champs :

id
name
restaurant_id

Exemples :

Pizza
Burger
Boissons

---

## 6.3 Dish

Dish.js

Champs :

id
name
description
price
image
category_id
available

Exemple :

Nom : Pizza Margherita
Prix : 250 MRU

---

## 6.4 Order

Order.js

Champs :

id
customer_name
phone
address
items
total_price
status
created_at

Statut possible :

pending
confirmed
delivered

---

# 7. ROUTES API

Toutes les routes commencent par :

/api

---

## 7.1 Menu

Route :

GET /api/menu

Description :

Retourne toutes les catégories avec leurs plats.

Exemple réponse :

{
categories:[
{
name:"Pizza",
dishes:[
{
name:"Margherita",
price:250
}
]
}
]
}

---

## 7.2 Plat individuel

Route :

GET /api/dishes/:id

Description :

Retourne les détails d’un plat.

---

## 7.3 Création commande

Route :

POST /api/orders

Body :

{
customer_name:"Ali",
phone:"222xxxx",
address:"Nouakchott",
items:[
{
dish_id:"123",
quantity:2
}
]
}

Action backend :

• vérifier les données
• calculer le prix total
• enregistrer la commande
• retourner confirmation

---

## 7.4 Contact

Route :

POST /api/contact

Body :

{
name
phone
message
}

Action :

enregistrer le message.

---

# 8. CONTROLLERS

Les controllers contiennent la logique principale.

menuController.js

Fonctions :

getMenu()
getDishById()

---

orderController.js

Fonctions :

createOrder()
getOrders()

---

contactController.js

Fonctions :

sendMessage()

---

# 9. SERVICES

Les services contiennent la logique métier.

orderService.js

Responsabilités :

calculer le total de la commande
valider les plats
préparer les données avant sauvegarde

---

# 10. MIDDLEWARE

Middleware pour améliorer la sécurité.

errorHandler.js

Responsabilité :

gérer toutes les erreurs du serveur.

---

rateLimiter.js

Responsabilité :

limiter les requêtes API.

Exemple :

100 requêtes par minute maximum.

---

# 11. VALIDATION DES DONNÉES

Fichier :

utils/validators.js

Responsabilité :

vérifier les champs envoyés par le client.

Exemples :

Nom client obligatoire
Téléphone obligatoire
Adresse obligatoire
Items non vide

---

# 12. FLUX COMPLET D’UNE COMMANDE

Étape 1

Frontend récupère le menu.

GET /api/menu

---

Étape 2

Client ajoute des plats au panier.

---

Étape 3

Frontend envoie commande.

POST /api/orders

---

Étape 4

Backend :

• valide les données
• calcule le total
• sauvegarde la commande

---

Étape 5

Backend renvoie confirmation.

---

# 13. GESTION DES ERREURS

Toutes les erreurs passent par :

middleware errorHandler.

Exemples :

plat introuvable
données invalides
erreur serveur

---

# 14. PERFORMANCE

Optimisations :

• index sur les plats
• requêtes optimisées
• réponse JSON légère

---

# 15. SÉCURITÉ

Mesures minimales :

validation des données
rate limiting
cors activé

---

# 16. TESTS

Tester les routes avec :

Postman

Tests à faire :

GET /menu
GET /dishes
POST /orders

---

# 17. ROADMAP BACKEND

Jour 1

• structure backend
• serveur Express
• connexion MongoDB

---

Jour 2

• modèles database
• routes menu

---

Jour 3

• routes commandes

---

Jour 4

• validation
• middleware

---

Jour 5

• tests API

---

# 18. OBJECTIF FINAL

Créer une API REST stable permettant :

• récupérer le menu
• afficher les plats
• enregistrer les commandes

Cette API sera utilisée par le frontend React.

Vision future :

transformer Monoresto en plateforme multi restaurants.
