const express = require('express');
const router = express.Router();

const productOptions = require('../controllers/doctors.js');

router.get('/getdoctors', productOptions.getDoctors)
router.post('/adddoctors', productOptions.addDoctors)

module.exports = router;