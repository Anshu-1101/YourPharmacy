const express = require('express');
const router = express.Router();

const productOptions = require('../controllers/products.js');

router.get('/getproducts', productOptions.getProducts)
router.post('/addProduct', productOptions.addProduct)

module.exports = router;