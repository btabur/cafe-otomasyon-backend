const express = require("express");

const router = express.Router()

// Diğer route dosyalrını içeri aktarıyoruz

const productsRoute = require("./products.js")
const categoriesRoute = require("./categories.js")



//Her rotayı ilgili yol altında kullanıyoruz.

router.use("/categories",categoriesRoute)
router.use("/products",productsRoute)


module.exports= router;