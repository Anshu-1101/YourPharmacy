const express = require('express');
const router = express.Router();

const adminOptions = require('../controllers/admin.js');
const verifyToken = require('../middleware/authentication.js');
const productOptions = require('../controllers/products.js');

router.post("/login", userOptions.logIn);
router.post('/addProduct', productOptions.addProduct)

module.exports = router;