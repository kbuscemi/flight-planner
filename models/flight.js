const mongoose = require('mongoose');


var flightSchema = new mongoose.Schema ({
    aircraft: {
        type: String, 
        enum: ["SLG2", "PA-44 Seminole", "172S-Skyhawk-C172" ],
        required: true
    },
    tailNumber: {
        type: String, 
        enum: ["N166TW-SLG2", "N238AT-Seminole", "N997RA-Skyhawk"],
        required: true
    },
    departure: String,
    destination: String,
    altitude: Number,
    date: String,
    time: Number,
    dayTakeoff: {type: Boolean, default: false},
    dayLanding: {type: Boolean, default: false},
    nightTakeoff: {type: Boolean, default: false},
    nightLanding: {type: Boolean, default: false},
    coPilot: String,
})

module.exports = mongoose.model('Flight', flightSchema);