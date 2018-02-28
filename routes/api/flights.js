const express = require('express');
const router = express.Router();
const flightCtrl = require('../../controllers/flightController');


router.get('/', flightCtrl.allFlights);

module.exports = router;