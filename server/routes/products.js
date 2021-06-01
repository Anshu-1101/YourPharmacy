const express = require('express');
const router = express.Router();

const productOptions = require('../controllers/products.js');

router.get('/getproducts', productOptions.getProducts)

module.exports = router;