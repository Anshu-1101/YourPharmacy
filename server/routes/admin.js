const express = require('express');
const router = express.Router();

const adminOptions = require('../controllers/admin.js');
const verifyToken = require('../middleware/authentication.js');
const productOptions = require('../controllers/products.js');

router.post("/login", adminOptions.logIn);
router.post("/signup", adminOptions.signUp);

router.post('/addProduct',verifyToken, productOptions.addProduct)

module.exports = router;