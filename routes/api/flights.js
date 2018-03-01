const express = require('express');
const router = express.Router();
const flightCtrl = require('../../controllers/flightController');


router.get('/', flightCtrl.allFlights);
router.post('/', flightCtrl.createFlight);

module.exports = router;