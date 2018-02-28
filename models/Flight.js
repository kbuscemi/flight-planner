const mongoose = require('mongoose');

var flightSchema = new mongoose.Schema ({
    aircraft: String,
    flightFuel: Number,
    longitude: Number,
    latitude: Number,
    maintence: false,
    date: Number,
    time: Number,
    airportDepart: String,
    airportArrival: String,
    wind: Number, 
    weight: Number,
    route: Number
})

module.exports = mongoose.model('Flight', flightSchema);