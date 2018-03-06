const express = require('express')
const router = express.Router();
const airportCtrl = require('../../controllers/airportController')

router.get('/', airportCtrl.index)

module.exports = router;
