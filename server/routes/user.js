const express = require('express');
const router = express.Router();

const userOptions = require('../controllers/user.js');
const verifyToken = require('../middleware/authentication.js');

router.post("/login", userOptions.logIn);
router.post("/signup", userOptions.signUp);
// router.get("/logout", verifyToken, userOptions.logOut);

module.exports = router;