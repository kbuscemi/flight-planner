const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const airportSchema = new Schema ({
    lat: Number,
    lng: Number,
    code: String
})

module.exports = mongoose.model('Airport', airportSchema);