const express = require("express");

// on importe nos controllers
const mainController = require("./controllers/mainController");
const cartController = require("./controllers/cartController");

const router = express.Router();

// page d'accueil
router.get("/", mainController.homePage);

router.get("/catalogue", mainController.cataloguePage);

router.get("/about", mainController.aboutPage);

router.get("/product/:id", mainController.productPage);

router.get("/contact", mainController.contactPage);

router.post("/add-to-cart", cartController.addToCart);

router.post("/update-cart", cartController.updateCart);

router.get("/cart", cartController.cartPage);

// on exporte le router
module.exports = router;
