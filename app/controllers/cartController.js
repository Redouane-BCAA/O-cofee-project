const dataMapper = require("../dataMapper");

const cartController = {

  addToCart: (req, res) => {
    const productId = req.body.productId;
    const quantity = parseInt(req.body.quantity, 10);

    if (!req.session.cart) {
      req.session.cart = [];
    }

    const existingProduct = req.session.cart.find(
      (item) => item.id === productId
    );

    if (existingProduct) {
      existingProduct.quantity += quantity;
    } else {
      req.session.cart.push({ id: productId, quantity: quantity });
    }

    res.redirect("/cart");
  },

  updateCart: (req, res) => {
    const products = req.body.products;

    console.log("Received products:", products);

    if (!req.session.cart) {
      req.session.cart = [];
    }

    products.forEach((product) => {
      const productId = parseInt(product.productId, 10);
      let quantity = parseInt(product.quantity, 10);
  
      // Trouve l'index du produit existant dans le panier
      const existingProductIndex = req.session.cart.find(
        (item) => item.id === productId
      );
  
      // Si le produit existe, on le supprime
      if (existingProductIndex !== -1) {
        req.session.cart.splice(existingProductIndex, 1);
      }
  
      // Si la quantité est différente de zéro, on ajoute le produit avec la nouvelle quantité
      if (quantity > 0) {
        req.session.cart.push({ id: productId, quantity: quantity });
      }
    });

    res.redirect("/cart");
  },

  cartPage: async (req, res) => {
    // on vérifie si le panier existe dans la session utilisateur
    if (!req.session.cart) {
      // si le panier n'existe pas, on renvoit un panier vide
      // avec un prix total de 0
      return res.render("cart", { cart: [], totalPrice: 0 });
    }

    // Utilisation de Promise.all pour traiter
    // tous les éléments du panier de manière asynchrone
    const cart = await Promise.all(
      req.session.cart.map(async (item) => {
        // on récupère les éléments du café
        const coffee = await dataMapper.getOneCoffee(item.id);
        // on combine les détails du café avec la quantité d'éléments dans le panier
        return { ...coffee, quantity: item.quantity };
      })
    );

    // calcun du prix total
    const totalPrice = cart.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );

    res.render("cart", { cart, totalPrice });
  },
};

module.exports = cartController;
