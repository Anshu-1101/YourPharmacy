const express = require('express');
const router = express.Router();

const authenticationOptions = require('../controllers/authentications.js');

router.get('/verify', authenticationOptions.verifyUser);

module.exports = router;