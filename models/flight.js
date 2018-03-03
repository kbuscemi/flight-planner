const mongoose = require('mongoose');

var flightSchema = new mongoose.Schema ({
    aircraft: {
        type: String, 
        enum: ["SLG2", "PA-44 Seminole", "172S-Skyhawk-C172" ],
        required: true
    },
    tailNumber: {
        type: String, 
        enum: ["N166TW", "N238AT", "N997RA"],
        required: true
    },
    departure: String,
    destination: String,
    altitude: Number,
    date: String,
    time: Number,
    // from: Number,
    // to: Number,
    dayTakeoff: {type: Boolean, default: false},
    dayLanding: {type: Boolean, default: false},
    nightTakeoff: {type: Boolean, default: false},
    nightLanding: {type: Boolean, default: false},
    coPilot: String,
    route: Number,



    
})

module.exports = mongoose.model('Flight', flightSchema);