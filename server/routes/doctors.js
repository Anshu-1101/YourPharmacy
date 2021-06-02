const express = require('express');
const router = express.Router();

const doctorOptions = require('../controllers/doctors.js');

router.get('/getdoctors', doctorOptions.getDoctors)


module.exports = router;