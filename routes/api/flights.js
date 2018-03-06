const express = require('express');
const router = express.Router();
const flightCtrl = require('../../controllers/flightController');

router.get('/', flightCtrl.allFlights);
router.post('/', checkAuth, flightCtrl.createFlight);

module.exports = router;

function checkAuth(req, res, next) {
    if (req.user) return next();
    return res.status(401).json({msg: 'not authenticated'});
  }