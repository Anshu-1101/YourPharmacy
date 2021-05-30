const express = require('express');
const router = express.Router();

const userOptions = require('../controllers/user.js');
const verifyToken = require('../middleware/authentication.js');

router.post("/login", userOptions.logIn);
router.post("/signup", userOptions.signUp);
router.post("/addtocart", verifyToken, userOptions.addtoCart)
router.get("/removefromcart", verifyToken, userOptions.removeFromCart)
router.get("/getcart", verifyToken, userOptions.getCart)
router.get("/getnavbar", verifyToken, userOptions.getNavbar)
router.get("/logout", verifyToken, userOptions.logOut);

// router.get("/logout", verifyToken, userOptions.logOut);

module.exports = router;