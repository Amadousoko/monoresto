# CAHIER DES CHARGES – FRONTEND

## Projet : Monoresto (Prototype SaaS Restaurant)

**Équipe : Team Soko**
Backend / Data : Amadou
Frontend : Adama

Objectif : développer un prototype fonctionnel d’un site web de restaurant permettant aux clients de consulter le menu et passer une commande.

---

# 1. OBJECTIF DU FRONTEND

Le frontend est l’interface visible par les clients.

Il doit permettre :

• afficher le restaurant
• afficher le menu
• afficher les plats
• ajouter des plats au panier
• passer une commande

Le frontend doit communiquer avec l’API backend.

Technologie utilisée :

React (avec Vite)

---

# 2. STRUCTURE DU PROJET FRONTEND

Arborescence :

frontend/

public/

src/

├── assets/
│   ├── images/
│   └── icons/
│
├── components/
│
│   ├── layout/
│   │     Navbar.jsx
│   │     Footer.jsx
│
│   ├── ui/
│   │     Button.jsx
│   │     Loader.jsx
│   │     Modal.jsx
│
│   └── restaurant/
│         DishCard.jsx
│         CategoryList.jsx
│         CartItem.jsx
│
├── pages/
│   Home.jsx
│   Menu.jsx
│   DishDetail.jsx
│   Cart.jsx
│   Checkout.jsx
│   Contact.jsx
│
├── context/
│   CartContext.jsx
│
├── services/
│   api.js
│
├── hooks/
│   useCart.js
│
├── utils/
│   formatPrice.js
│
├── App.jsx
└── main.jsx

---

# 3. PAGES À DÉVELOPPER

## 3.1 Page Home

Fichier : Home.jsx

Contenu :

• logo du restaurant
• image principale (hero section)
• bouton "Voir le menu"
• section présentation du restaurant
• bouton contact

Objectif :

donner envie au client de voir le menu.

---

## 3.2 Page Menu

Fichier : Menu.jsx

Fonction :

afficher toutes les catégories et les plats.

Structure :

Catégorie
→ liste de plats

Exemple :

Pizza

* Margherita
* Pepperoni

Burger

* Cheese Burger
* Double Burger

Chaque plat utilise le composant DishCard.

---

## 3.3 Composant DishCard

Fichier : DishCard.jsx

Affiche :

• image du plat
• nom
• prix
• bouton "Ajouter au panier"

Actions :

addToCart()

---

## 3.4 Page Dish Detail

Fichier : DishDetail.jsx

Affiche :

• image grande
• description
• prix
• bouton ajouter au panier

---

## 3.5 Page Cart

Fichier : Cart.jsx

Affiche :

• liste des plats ajoutés
• quantité
• prix total

Fonctions :

removeFromCart()
updateQuantity()

---

## 3.6 Page Checkout

Fichier : Checkout.jsx

Formulaire client :

Nom
Téléphone
Adresse

Bouton :

"Passer la commande"

Cette page envoie les données au backend.

---

## 3.7 Page Contact

Fichier : Contact.jsx

Formulaire simple :

Nom
Téléphone
Message

---

# 4. GESTION DU PANIER

Le panier sera géré avec React Context.

Fichier :

CartContext.jsx

Fonctions nécessaires :

addToCart()
removeFromCart()
updateQuantity()
clearCart()

Les données du panier doivent être accessibles depuis toutes les pages.

---

# 5. COMMUNICATION AVEC LE BACKEND

Fichier :

services/api.js

Utiliser fetch ou axios.

Exemple appel API :

GET /api/menu

Retour :

{
categories:[
{
name:"Pizza",
dishes:[...]
}
]
}

Créer commande :

POST /api/orders

Body envoyé :

{
customer_name
phone
address
items
}

---

# 6. DESIGN UI

Style simple mais moderne.

Couleurs recommandées :

couleur principale : rouge / orange
fond : blanc
texte : noir

Principes :

design responsive
mobile first
cartes modernes
images optimisées

---

# 7. BONNES PRATIQUES

• composants réutilisables
• code propre
• commentaires
• structure claire

---

# 8. ROADMAP FRONTEND

Jour 1

• structure projet React
• Navbar
• Footer
• Page Home

Jour 2

• Page Menu
• DishCard

Jour 3

• Cart
• CartContext

Jour 4

• Checkout

Jour 5

• connexion avec API backend

---

# 9. OBJECTIF FINAL

Créer un prototype fonctionnel permettant :

• voir le menu
• ajouter des plats
• commander

Ce prototype pourra ensuite évoluer vers un SaaS multi restaurants.

Vision long terme :

plateforme de commande en ligne pour restaurants locaux.
