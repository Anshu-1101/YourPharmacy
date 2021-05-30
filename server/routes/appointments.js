const express = require('express');
const router = express.Router();

const userOptions = require('../controllers/appointments');
const verifyToken = require('../middleware/authentication.js');

router.post("/addappointment", verifyToken, userOptions.addAppointment);
router.get("/getappointment", verifyToken, userOptions.getAppointment)
module.exports = router;