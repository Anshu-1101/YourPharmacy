const express = require('express');
const router = express.Router();

const userOptions = require('../controllers/user.js');
const verifyToken = require('../middleware/authentication.js');

router.post("/login", userOptions.logIn);
router.post("/signup", userOptions.signUp);
router.post("/addtocart", verifyToken, userOptions.addtoCart)
router.post("/addorder", verifyToken, userOptions.addOrder)
router.post("/removefromcart", verifyToken, userOptions.removeFromCart)
router.get("/getcart", verifyToken, userOptions.getCart)
router.get("/getorder", verifyToken, userOptions.getOrder)
router.get("/getnavbar", verifyToken, userOptions.getNavbar)
router.get("/logout", verifyToken, userOptions.logOut);


module.exports = router;